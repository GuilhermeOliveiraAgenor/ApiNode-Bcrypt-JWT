const db = require('../models');
const {where,and} = require('sequelize');

class vendaService{

    constructor(vendaModel){
        this.venda = vendaModel;
    }

    


    async cadastrarVenda(codigoCliente,numeroNF,dataVenda){

        try {
            const venda = await this.venda.create({
                codigoCliente: codigoCliente,
                numeroNF: numeroNF,
                dataVenda: dataVenda
            });

            return venda ? venda : null;

        } catch (error) {
            console.log(error);
        }

    }

}

module.exports = vendaService;
