const db = require('../models');
const {where,and} = require('sequelize');
const {movimentoProduto} = require('../models');

class requisicaoService{

    constructor(requisicaoModel){
        this.Requisicao = requisicaoModel;
    }

    async cadastrarRequisicao(comprador,codigoProduto,quantidade,centroCusto,statusRequisicao,codigoDeposito,precoUnitario,dataCompra){

        try {
            const requisicao = await this.Requisicao.create({
                comprador: comprador,
                codigoProduto: codigoProduto,
                quantidade: quantidade,
                centroCusto: centroCusto,
                statusRequisicao: statusRequisicao
            })

            
            const movimento = await movimentoProduto.create({
                codigoDeposito: codigoDeposito,
                codigoProduto: codigoProduto,
                tipoMovimento: 'Entrada',
                quantidade: quantidade,
                precoUnitario: precoUnitario,
                dataMovimento: dataCompra
            })

            return movimento ? movimento : null;

        } catch (error) {
            console.log(error);
        }

    }

    async alterarRequisicao(statusRequisicao,codigo){
        try {
            const requisicao = await this.Requisicao.update(
                {statusRequisicao: statusRequisicao},
                {
                    where: {id:codigo}
                },
            );

            return requisicao ? requisicao : null;

        } catch (error) {
            console.log(error);
        }
    }

    async excluirRequisicao(codigo){
        try {
            const requisicao = await this.Requisicao.destroy({where : {id:codigo}});
            return requisicao ? requisicao : null;
        } catch (error) {
            console.log(error);
        }
    }

    async listarRequisicao(){
        try {
            const requisicao = await this.Requisicao.findAll();
            return requisicao ? requisicao : null;

        } catch (error) {
            console.log(error);
        }
    }

    async PesquisarRequisicaoCodigo(codigo){
        try {
            const requisicao = await this.Requisicao.findOne({where : {id: codigo}});
            return requisicao ? requisicao : null;
        } catch (error) {
            console.log(error);
        }
    }


}

module.exports = requisicaoService;