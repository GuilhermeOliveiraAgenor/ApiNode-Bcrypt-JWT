const { where, and } = require('sequelize');
const db = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken')
const tokenUsuario = 'Token';

class userService{

    constructor(userModel){
        this.User = userModel;
    }

    async cadastrarUsuario(nome, email, senha, codigoDepartamento){

        try {
            const hashPassword = await bcrypt.hash(senha, saltRounds);//criptografa a senha digitada e tamanho da criptografia
            const usuario = await this.User.create({
                
                nome: nome,
                email: email,
                senha: hashPassword,//passa a senha criptografada
                codigoDepartamento: codigoDepartamento

            });
            usuario.senha = '';
            return usuario ? usuario : null;
            /*if(usuario){
                return usuario;
            }
            else{
                return null;
            }*/

     } catch (error) {
            
        }

    }

    async PesquisarUsuarioId(codigo){

        try {
            const usuario = await this.User.findOne({where : {id: codigo}});
            return usuario ? usuario : null;

        } catch (error) {
            console.log(error);
        }

    }

    async listarUsuarios(token){
        try {
            const decoded = jwt.verify(token, 'Token');
            if(decoded){
                const usuarios = await this.User.findAll();
                return usuarios ? usuarios : null;
           }
        } catch (error) {
            console.log(error);
        }
    }

    async Login(email, senha){

        try {
            
            const usuario = await this.User.findOne({where : {email: email}});
            if(usuario && await bcrypt.compare(senha, usuario.senha))//compara a senha digita com a senha criptografada
            {
                //inicia a sessao
                const token = jwt.sign({id: usuario.id}, 'Token', {expiresIn:'1h'});//passa o id do usuário para criar, define o nome e tempo da sessao
                return {usuario, token};
            }
            else{
                return null;
            }

        } catch (error) {
            console.log(error);
        }

    }

}

module.exports = userService;

