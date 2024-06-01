const db = require('../models');
const {where, and}= require('sequelize');
const jwt = require('jsonwebtoken');
const {Op} = require('sequelize');
const centro = require('../models/centro');

class centroService{

    constructor(centroModel){
        this.Centro = centroModel;
    }

    async cadastrarCentro(codigoCusto,descricao){
        try {
            const centro = await this.Centro.create({
                codigoCusto: codigoCusto,
                descricao: descricao
            });

            return centro ? centro : null;

        } catch (error) {
            console.log(error);
        }
    }
    
    async alterarCentro(codigoCusto,descricao,codigo){
        try {
            const centro = await this.Centro.update(
                {codigoCusto: codigoCusto, descricao: descricao},
                {
                    where: {id:codigo}
                },
            );

            return centro ? centro : null;

        } catch (error) {
            console.log(error);
        }
    }

    async excluirCentro(codigo){
        try {
            const centro = await this.Centro.destroy({where : {id:codigo}});
            return centro ? centro : null;
        } catch (error) {
            console.log(error);
        }
    }

    async listarCentro(){
        try {
            const centro = await this.Centro.findAll();
            return centro ? centro : null;
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = centroService;