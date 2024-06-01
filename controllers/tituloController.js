class tituloController{

    constructor(tituloService){
        this.tituloService = tituloService;
    }

    async cadastrarTitulo(req,res){

        const {notaFiscal,numeroParcelas,valorOriginal,dataVencimento,situacao} = req.body;

        try {
            const titulo = await this.tituloService.cadastrarTitulo(notaFiscal,numeroParcelas,valorOriginal,dataVencimento,situacao);
            res.status(200).json(titulo);
        } catch (error) {
            res.status(500).json({error: 'Erro ao cadastrar titulo'});
        }
    }

}

module.exports = tituloController;