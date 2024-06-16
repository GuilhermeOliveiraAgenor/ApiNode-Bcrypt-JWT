const { where, and } = require('sequelize');
const db = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken')
const tokenUsuario = 'Token';

class authController{

    async autenticacao(token){
        try {
            const decoded = jwt.verify(token, 'Token');
            if(decoded){
              return true;
           }
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = authController;

