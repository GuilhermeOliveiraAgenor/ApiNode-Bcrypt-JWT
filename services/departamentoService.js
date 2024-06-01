const db = require('../models');
const {where,and} = require('sequelize');

class departamentoService{

    constructor(departamentoModel){
        this.Departamento = departamentoModel;
    }

    async cadastrarDepartamento(descricao){

        try {
            const departamento = await this.Departamento.create({
                descricao: descricao
            })

            return departamento ? departamento : null;

        } catch (error) {
            console.log(error);
        }

    }

    async alterarDepartamento(descricao,codigo){
        try {
            const departamento = await this.Departamento.update(
                {descricao: descricao},
                {
                    where: {id:codigo}
                },
            );

            return departamento ? departamento : null;

        } catch (error) {
            console.log(error);
        }
    }

    async excluirDepartamento(codigo){
        try {
            const departamento = await this.Departamento.destroy({where : {id:codigo}});
            return departamento ? departamento : null;
        } catch (error) {
            console.log(error);
        }
    }

    async listarDepartamento(){
        try {
            const departamento = await this.Departamento.findAll();
            return departamento ? departamento : null;
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = departamentoService;