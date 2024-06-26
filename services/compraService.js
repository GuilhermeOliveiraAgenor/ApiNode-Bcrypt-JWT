const db = require('../models');
const {where, and}= require('sequelize');
const jwt = require('jsonwebtoken');
const {Op} = require('sequelize');
const {movimentoProduto} = require('../models');

class compraService{

    constructor(compraModel){
        this.Compra = compraModel;
    }

    async cadastrarCompra(codigoFornecedor,codigoCotacao,comprador,codigoProduto,quantidade,custoUnitario,statusCompra,codigoDeposito, dataCompra){
        try {
            const compra = await this.Compra.create({
                codigoFornecedor: codigoFornecedor,
                codigoCotacao: codigoCotacao,
                comprador: comprador,
                codigoProduto: codigoProduto,
                quantidade: quantidade,
                custoUnitario: custoUnitario,
                statusCompra: statusCompra
            });

            const movimento = await movimentoProduto.create({
                codigoDeposito: codigoDeposito,
                codigoProduto: codigoProduto,
                tipoMovimento: 'Entrada',
                quantidade: quantidade,
                precoUnitario: custoUnitario,
                dataMovimento: dataCompra
            })

            return movimento ? movimento : null;

        } catch (error) {
            console.log(error);
        }
    }
    
    async alterarCompra(statusCompra,codigo){
        try {
            const compra = await this.Compra.update(
                {statusCompra: statusCompra},
                {
                    where: {id:codigo}
                },
            );

            return compra ? compra : null;

        } catch (error) {
            console.log(error);
        }
    }

    async excluirCompra(codigo){
        try {
            const compra = await this.Compra.destroy({where : {id:codigo}});
            return compra ? compra : null;
        } catch (error) {
            console.log(error);
        }
    }

    async listarCompra(){
        try {
            const compra = await this.Compra.findAll();
            return compra ? compra : null;
        } catch (error) {
            console.log(error);
        }
    }
    
    async PesquisarCompraCodigo(codigo){
        try {
            const compra = await this.Compra.findOne({where : {id: codigo}});
            return compra ? compra : null;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = compraService;