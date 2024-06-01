const db = require('../models');
const {where,and} = require('sequelize');

class tituloService{

    constructor(tituloModel){
        this.titulo = tituloModel;
    }

    async cadastrarTitulo(notaFiscal,numeroParcelas,valorOriginal,dataVencimento,situacao){

        try {
            const titulo = await this.titulo.create({
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

module.exports = tituloService;
