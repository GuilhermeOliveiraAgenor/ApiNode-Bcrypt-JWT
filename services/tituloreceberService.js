const db = require('../models');
const {where,and} = require('sequelize');

class tituloreceberService{

    constructor(tituloreceberModel){
        this.tituloreceber = tituloreceberModel;
    }

    async CadastrarTituloReceber(notaFiscal,numeroParcelas,valorOriginal,dataVencimento,situacao){

        try {
            const titulo = await this.tituloreceber.create({
                notaFiscal: notaFiscal,
                numeroParcelas: numeroParcelas,
                valorOriginal: valorOriginal,
                dataVencimento: dataVencimento,
                situacao: situacao
            });

            return titulo ? titulo : null;

        } catch (error) {
            console.log(error);
        }

    }

}

module.exports = tituloreceberService;
