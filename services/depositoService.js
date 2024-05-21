const db = require('../models');
const {where, and} = require('sequelize');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const tokenUsuario = 'Token';

class depositoService{

    constructor(depositoModel){
        this.Deposito = depositoModel;
    }

    async cadastrarDeposito(descricao, ativo){

        try {
            const deposito = await this.Deposito.create({
                descricao: descricao,
                ativo: ativo
            });

            return deposito ? deposito : null;

        } catch (error) {
            console.log(error); 
        }
    }

    async alterarDeposito(id, descricao, ativo)
    {
        try {
            const deposito = await this.Deposito.update( 
                {descricao: descricao, ativo:ativo},
                {
                    where:{
                        id: id,
                    },
                },
        );
        return deposito ? deposito: null;

        } catch (error) {
            console.log(error);
        }
    }

    async listarDeposito(){
        try {
            const deposito = await this.Deposito.findAll();
            return deposito ? deposito: null;
        } catch (error){
            console.log(error);
        }
    }

    async PesquisarDepositoCodigo(codigo){
        try {
            const deposito = await this.Deposito.findOne({where: {id: codigo}});
            return deposito ? deposito : null;
        } catch (error) {
            console.log(error);
        }
    }

}


module.exports = depositoService;
