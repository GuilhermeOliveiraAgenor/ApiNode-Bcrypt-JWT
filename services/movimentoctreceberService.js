const db = require('../models');
const {where,and} = require('sequelize');

class movimentoctreceberService{

    constructor(movimentoctreceberModel){
        this.movimentoctreceber = movimentoctreceberModel;
    }

    async CadastrarMovimentoTituloReceber(codigoTitulo,dataMovimento,tipoMovimento,valorMovimento,valorMulta,valorJuros){

        try {
            const movimento = await this.movimentoctreceber.create({
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

module.exports = movimentoctreceberService;