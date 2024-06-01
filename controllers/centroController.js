class centroController{

    constructor(centroService){
        this.centroService = centroService;
    }

    async cadastrarCentro(req,res){

        const {codigoCusto,descricao} = req.body;

        try {
            const centro = await this.centroService.cadastrarCentro(codigoCusto,descricao);
            res.status(200).json(centro);
        } catch (error) {
            res.status(500).json({error:'Erro ao cadastrar centro de custo'})
        }

    }

    
    async alterarCentro(req,res){

        const {codigoCusto,descricao,codigo} = req.body;

        try {
            const centro = await this.centroService.alterarCentro(codigoCusto,descricao,codigo);
            res.status(200).json(centro);
        } catch (error) {
            res.status(500).json({error: 'Erro ao alterar centro'});
        }

    }

    async excluirCentro(req,res){

        const {codigo} = req.body;

        try {
            const centro = await this.centroService.excluirCentro(codigo);
            res.status(200).json(centro);
        } catch (error) {
            res.status(500).json({error: 'Erro ao excluir centro'});
        }

    }

    async listarCentro(req,res){
        
        try {
            const centro = await this.centroService.listarCentro();
            res.status(200).json(centro);
        } catch (error) {
            res.status(500).json({error: 'Erro ao listar centro'});
        }

    }
    
    
}

module.exports = centroController;