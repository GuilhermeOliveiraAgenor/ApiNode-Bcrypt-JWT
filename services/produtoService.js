const db = require('../models');
const {where, and} = require('sequelize');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const tokenUsuario = 'Token';

class produtoService{
    constructor(produtoModel){
        this.Produto = produtoModel;
    }

    async cadastrarProduto(nome,ativo){
        try {
            const produto = await this.Produto.create({
                nome:nome,
                ativo:ativo
            })
            return produto ? produto : null;
        } catch (error) {
            console.log(error);
        }
    }

    async alterarProduto(codigo, nome, ativo){
        try {
                const produto = await this.Produto.update(
                    {nome: nome, ativo:ativo},
                    {
                        where: {id: codigo},
                    },
                );
                return produto ? produto : null;
            }
        
        catch (error) {
            console.log(error);
        }
    }

    async listarProduto(){
        try {
            const produto = await this.Produto.findAll();
            return produto ? produto : null;

        } catch (error) {
            console.log(error);
        }
    }

    async PesquisarProdutoCodigo(codigo){
        try {
            const produto = await this.Produto.findOne({where : {id: codigo}});
            return produto ? produto : null;
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = produtoService;
