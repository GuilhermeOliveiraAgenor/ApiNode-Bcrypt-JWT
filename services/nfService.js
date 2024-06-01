const db = require('../models');
const {where,and} = require('sequelize');

class nfService{

    constructor(nfModel){
        this.notafiscal = nfModel;
    }

    async CadastrarNotaFiscal(codigoProduto,quantidade,custoUnitario,parcelas,numeroNota){

        try {
            const notaFiscal = await this.notafiscal.create({
                codigoProduto: codigoProduto,
                quantidade: quantidade,
                custoUnitario: custoUnitario,
                parcelas: parcelas,
                numeroNota: numeroNota
            });

            return notaFiscal ? notaFiscal : null;

        } catch (error) {
            console.log(error);
        }

    }

}

module.exports = nfService;
