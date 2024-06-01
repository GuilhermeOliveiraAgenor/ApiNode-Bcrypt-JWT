const db = require('../models');
const {where,and} = require('sequelize');

class movimentotituloService{

    constructor(movimentotituloModel){
        this.movimentotitulo = movimentotituloModel;
    }

    async CadastrarMovimentoTitulo(codigoTitulo,dataMovimento,tipoMovimento,valorMovimento,valorMulta,valorJuros){

        try {
            const movimento = await this.movimentotitulo.create({
                codigoTitulo: codigoTitulo,
                dataMovimento: dataMovimento,
                tipoMovimento: tipoMovimento,
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