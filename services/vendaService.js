const db = require('../models');
const {where,and} = require('sequelize');
const {detalhevenda} = require('../models');
const {movimentoProduto} = require('../models');

class vendaService{

    constructor(vendaModel){
        this.venda = vendaModel;
    }

    async cadastrarVenda(codigoCliente,numeroNF,dataVenda,codigoProduto,quantidade,precoUnitario,codigoDeposito){

        try {
            const venda = await this.venda.create({
                codigoCliente: codigoCliente,
                numeroNF: numeroNF,
                dataVenda: dataVenda
            })

            const idVenda = venda.id;
            console.log(idVenda);

            const detalhe = await detalhevenda.create({
                codigoVenda: idVenda,
                codigoProduto: codigoProduto,
                quantidade: quantidade,
                precoUnitario: precoUnitario
            })

            const movimento = await movimentoProduto.create({
                codigoDeposito: codigoDeposito,
                codigoProduto: codigoProduto,
                tipoMovimento: 'Saída',
                quantidade: quantidade,
                precoUnitario: precoUnitario,
                dataMovimento: dataVenda
            })

            return movimento ? movimento : null;

        } catch (error) {
            console.log(error);
        }

    }

    async listarVenda(){
        try {
            const venda = await this.venda.findAll({
            include: [
                {model: detalhevenda}
            ]
            });
            return venda ? venda : null;

        } catch (error) {
            console.log(error);
        }
    }

    
    async ListarVendaData(dataVenda){
        try {
            const venda = await this.venda.findAll({
            where: {
                dataVenda: dataVenda
            },              
            include: [
                {model: detalhevenda}
            ]
            });
            return venda ? venda : null;

        } catch (error) {
            console.log(error);
        }
    }

    async ListarVendaNF(notaFiscal){
        try {
            const venda = await this.venda.findAll({
            where: {
                numeroNF: notaFiscal
            },              
            include: [
                {model: detalhevenda}
            ]
            });
            return venda ? venda : null;

        } catch (error) {
            console.log(error);
        }
    }



}

module.exports = vendaService;
