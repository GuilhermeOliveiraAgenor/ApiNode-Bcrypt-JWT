const db = require('../models');
const {where,and} = require('sequelize');

class movimentoctreceberService{

    constructor(movimentoctreceberModel){
        this.movimentoctreceber = movimentoctreceberModel;
    }

    async CadastrarMovimentoTituloAbertura(codigoTitulo,dataMovimento,valorMovimento,valorMulta,valorJuros){

        try {
            const movimento = await this.movimentoctreceber.create({
                codigoTitulo: codigoTitulo,
                dataMovimento: dataMovimento,
                tipoMovimento: 'Abertura',
                valorMovimento: valorMovimento,
                valorMulta: valorMulta,
                valorJuros: valorJuros
            });

            return movimento ? movimento : null;

        } catch (error) {
            console.log(error);
        }

    }

    async CadastrarMovimentoTituloCancelamento(codigoTitulo,dataMovimento,valorMovimento,valorMulta,valorJuros){

        try {
            const movimento = await this.movimentoctreceber.create({
                codigoTitulo: codigoTitulo,
                dataMovimento: dataMovimento,
                tipoMovimento: 'Cancelamento',
                valorMovimento: valorMovimento,
                valorMulta: valorMulta,
                valorJuros: valorJuros
            });

            return movimento ? movimento : null;

        } catch (error) {
            console.log(error);
        }

    }

    async CadastrarMovimentoTituloPagamento(codigoTitulo,dataMovimento,valorMovimento,valorMulta,valorJuros){

        try {
            const movimento = await this.movimentoctreceber.create({
                codigoTitulo: codigoTitulo,
                dataMovimento: dataMovimento,
                tipoMovimento: 'Pagamento',
                valorMovimento: valorMovimento,
                valorMulta: valorMulta,
                valorJuros: valorJuros
            });

            return movimento ? movimento : null;

        } catch (error) {
            console.log(error);
        }

    }

}

module.exports = movimentoctreceberService;