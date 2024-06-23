const db = require('../models');
const {where,and} = require('sequelize');

class movimentotituloService{

    constructor(movimentotituloModel){
        this.movimentotitulo = movimentotituloModel;
    }

    async CadastrarMovimentoAbertura(codigoTitulo,dataMovimento,valorMovimento,valorMulta,valorJuros){

        try {
            const movimento = await this.movimentotitulo.create({
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

    
    async CadastrarMovimentoCancelamento(codigoTitulo,dataMovimento,valorMovimento,valorMulta,valorJuros){

        try {
            const movimento = await this.movimentotitulo.create({
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

    
    async CadastrarMovimentoPagamento(codigoTitulo,dataMovimento,valorMovimento,valorMulta,valorJuros){

        try {
            const movimento = await this.movimentotitulo.create({
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

module.exports = movimentotituloService;