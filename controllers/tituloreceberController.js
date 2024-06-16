class tituloreceberController{

    constructor(tituloreceberService){
        this.tituloreceberService = tituloreceberService;
    }

    async CadastrarTituloReceber(req,res){

        const {notaFiscal,numeroParcelas,valorOriginal,dataVencimento,situacao} = req.body;

        try {
            const titulo = await this.tituloreceberService.CadastrarTituloReceber(notaFiscal,numeroParcelas,valorOriginal,dataVencimento,situacao);
            res.status(200).json(titulo);
        } catch (error) {
            res.status(500).json({error: 'Erro ao cadastrar titulo'});
        }
    }

}

module.exports = tituloreceberController;