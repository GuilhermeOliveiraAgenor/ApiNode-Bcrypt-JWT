const departamento = require("../models/departamento");

class departamentoController{

    constructor(departamentoService){
        this.departamentoService = departamentoService;
    }

    async cadastrarDepartamento(req,res){

        const {descricao} = req.body;

        try {
            const departamento = await this.departamentoService.cadastrarDepartamento(descricao);
            res.status(200).json(departamento);
        } catch (error) {
            res.status(500).json({error: 'Erro ao cadastrar departamento'});
        }
    }

    async alterarDepartamento(req,res){

        const {descricao,codigo} = req.body;

        try {
            const departamento = await this.departamentoService.alterarDepartamento(descricao,codigo);
            res.status(200).json(departamento);
        } catch (error) {
            res.status(500).json({error: 'Erro ao alterar departamento'}    );
        }

    }

    async excluirDepartamento(req,res){

        const {codigo} = req.body;

        try {
            const departamento = await this.departamentoService.excluirDepartamento(codigo);
            res.status(200).json(departamento);
        } catch (error) {
            res.status(500).json({error: 'Erro ao excluir departamento'});
        }

    }

    async listarDepartamento(req,res){
        
        try {
            const departamento = await this.departamentoService.listarDepartamento();
            res.status(200).json(departamento);
        } catch (error) {
            res.status(500).json({error: 'Erro ao listar departamento'});
        }

    }

}

module.exports = departamentoController;