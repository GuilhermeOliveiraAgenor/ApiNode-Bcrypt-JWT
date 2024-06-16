class movimentoctreceberController{

    constructor(movimentoctreceberService){
        this.movimentoctreceberService = movimentoctreceberService;
    }

    async CadastrarMovimentoTituloReceber(req,res){

        const {codigoTitulo,dataMovimento,tipoMovimento,valorMovimento,valorMulta,valorJuros} = req.body;

        try {
            const movimento = await this.movimentoctreceberService.CadastrarMovimentoTituloReceber(codigoTitulo,dataMovimento,tipoMovimento,valorMovimento,valorMulta,valorJuros);
            res.status(200).json(movimento);
        } catch (error) {
            res.status(500).json({error: 'Erro ao cadastrar movimento'});
        }
    }

}

module.exports = movimentoctreceberController;