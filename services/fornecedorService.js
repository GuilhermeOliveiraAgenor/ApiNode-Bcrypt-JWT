const db = require('../models');
const {where,and} = require('sequelize');

class fornecedorService{

    constructor(fornecedorModel){
        this.Fornecedor = fornecedorModel;
    }

    async cadastrarFornecedor(razaoSocial,cnpj,ativo){

        try {
            const fornecedor = await this.Fornecedor.create({
                razaoSocial: razaoSocial,
                cnpj: cnpj,
                ativo: ativo
            })

            return fornecedor ? fornecedor : null;

        } catch (error) {
            console.log(error);
        }

    }

    
    async alterarFornecedor(razaoSocial,ativo,codigo){
        try {
            const fornecedor = await this.Fornecedor.update(
                {razaoSocial: razaoSocial, ativo: ativo},
                {
                    where: {id:codigo}
                },
            );

            return fornecedor ? fornecedor : null;

        } catch (error) {
            console.log(error);
        }
    }

    async excluirFornecedor(codigo){
        try {
            const fornecedor = await this.Fornecedor.destroy({where : {id:codigo}});
            return fornecedor ? fornecedor : null;
        } catch (error) {
            console.log(error);
        }
    }

    async listarFornecedor(){
        try {
            const fornecedor = await this.Fornecedor.findAll();
            return fornecedor ? fornecedor : null;
        } catch (error) {
            console.log(error);
        }
    }

}


module.exports = fornecedorService;