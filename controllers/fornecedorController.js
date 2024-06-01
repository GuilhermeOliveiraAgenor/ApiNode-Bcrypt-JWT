const departamento = require("../models/fornecedor");

class fornecedorController{

    constructor(fornecedorService){
        this.fornecedorService = fornecedorService;
    }

    async cadastrarFornecedor(req,res){

        const {razaoSocial,cnpj,ativo} = req.body;

        try {
            const fornecedor = await this.fornecedorService.cadastrarFornecedor(razaoSocial,cnpj,ativo);
            res.status(200).json(fornecedor);
        } catch (error) {
            res.status(500).json({error: 'Erro ao cadastrar fornecedor'});
        }
    }

    async alterarFornecedor(req,res){

        const {razaoSocial,ativo,codigo} = req.body;

        try {
            const fornecedor = await this.fornecedorService.alterarFornecedor(razaoSocial,ativo,codigo);
            res.status(200).json(fornecedor);
        } catch (error) {
            res.status(500).json({error: 'Erro ao alterar fornecedor'});
        }

    }

    async excluirFornecedor(req,res){

        const {codigo} = req.body;

        try {
            const fornecedor = await this.fornecedorService.excluirFornecedor(codigo);
            res.status(200).json(fornecedor);
        } catch (error) {
            res.status(500).json({error: 'Erro ao excluir fornecedor'});
        }

    }

    async listarFornecedor(req,res){
        
        try {
            const fornecedor = await this.fornecedorService.listarFornecedor();
            res.status(200).json(fornecedor);
        } catch (error) {
            res.status(500).json({error: 'Erro ao listar fornecedor'});
        }

    }


}

module.exports = fornecedorController;