const { where, and } = require('sequelize');
const db = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken')
const tokenUsuario = 'Token';

class authController{

    async autenticacao(token){

        try {
            jwt.verify(token, 'Token', (err, data) => {
                if(err){
                    console.log('Erro ao fazer login')
                    return false
                }else{
                    console.log(data);
                    return true;
                }
            })
            
        }
         catch (error) {
            console.log(error);
        }
    }

}

module.exports = authController;

