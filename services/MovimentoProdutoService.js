const db = require('../models');
const {where, and} = require('sequelize');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const tokenUsuario = 'Token';
const { Op } = require('sequelize');

class MovimentoProdutoService{

    constructor(MovimentoProdutoModel){
        this.MovimentoProduto = MovimentoProdutoModel;
    }

    async CadastrarMovimentoProduto(codigoDeposito,codigoProduto,tipoMovimento,quantidade,precoUnitario,dataMovimento){
        try {
            const movimentoProduto = await this.MovimentoProduto.create({
                codigoDeposito: codigoDeposito,
                codigoProduto: codigoProduto,
                tipoMovimento: tipoMovimento,
                quantidade: quantidade,
                precoUnitario: precoUnitario,
                dataMovimento: dataMovimento
            });
            return movimentoProduto ? movimentoProduto : null;            
        } catch (error) {
            console.log(error);
        }
    }

    async PesquisarCodigoProduto(codigo)
    {
        try {
            const movimentoProduto = await this.MovimentoProduto.findAll({
                where: {codigoProduto:codigo}
            });
            return movimentoProduto ? movimentoProduto : null;
        } catch (error) {
            console.log(error);
        }
    }

    async PesquisarCodigoDeposito(codigo){
        try {
            const movimentoProduto = await this.MovimentoProduto.findAll({
                where: {codigoDeposito:codigo}
            });
            return movimentoProduto ? movimentoProduto : null;
        } catch (error) {
            console.log(error);
        }
    }

    async PesquisarDataMovimento(dataInicial, dataFinal){
        try {
            const movimentoProduto = await this.MovimentoProduto.findAll({
                where: {
                [Op.and]: [{
                    dataMovimento:{
                        [Op.between]: [dataInicial,dataFinal]
                    }
                }]
                },
            });
            return movimentoProduto ? movimentoProduto : null;
        } catch (error) {
            console.log(error);
        }
    }

    async AlterarMovimentoProduto(tipoMovimento,quantidade,precoUnitario,dataMovimento,codigo){
        try {
            const movimentoProduto = await this.MovimentoProduto.update(
                {tipoMovimento: tipoMovimento,quantidade: quantidade, precoUnitario: precoUnitario, dataMovimento: dataMovimento},
                {
                    where : {id: codigo},
                },
            );
            return movimentoProduto ? movimentoProduto : null;
        } catch (error) {
            console.log(error);
        }
    }

    async ExcluirMovimentoProduto(codigo){
        try {
            const movimentoProduto = await this.MovimentoProduto.destroy({where : {id:codigo}});
            return movimentoProduto ? movimentoProduto : null;
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = MovimentoProdutoService;