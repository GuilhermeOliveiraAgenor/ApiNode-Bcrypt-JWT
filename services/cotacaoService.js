const db = require('../models');
const {where, and}= require('sequelize');
const jwt = require('jsonwebtoken');
const {Op} = require('sequelize');

class cotacaoService{

    constructor(cotacaoModel){
        this.Cotacao = cotacaoModel;
    }

    async cadastrarCotacao(codigoProduto,codigoFornecedor,preco,dataCotacao,comprador,dataValidade,statusCotacao){
        try {
            const cotacao = await this.Cotacao.create({
                codigoProduto : codigoProduto,
                codigoFornecedor: codigoFornecedor,
                preco: preco,
                dataCotacao: dataCotacao,
                comprador: comprador,
                dataValidade: dataValidade,
                statusCotacao: statusCotacao
            });

            return cotacao ? cotacao : null;

        } catch (error) {
            console.log(error);
        }
    }

    
    async alterarCotacao(statusCotacao,codigo){
        try {
            const cotacao = await this.Cotacao.update(
                {statusCotacao: statusCotacao},
                {
                    where: {id:codigo}
                },
            );

            return cotacao ? cotacao : null;

        } catch (error) {
            console.log(error);
        }
    }

    async excluirCotacao(codigo){
        try {
            const cotacao = await this.Cotacao.destroy({where : {id:codigo}});
            return cotacao ? cotacao : null;
        } catch (error) {
            console.log(error);
        }
    }

    async listarCotacao(){
        try {
            const cotacao = await this.Cotacao.findAll();
            return cotacao ? cotacao : null;
        } catch (error) {
            console.log(error);
        }
    }

    async PesquisarCotacaoCodigo(codigo){
        try {
            const cotacao = await this.Cotacao.findOne({where : {id: codigo}});
            return cotacao ? cotacao : null;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = cotacaoService;