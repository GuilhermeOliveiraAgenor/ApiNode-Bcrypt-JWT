class movimentoctreceberController{

    constructor(movimentoctreceberService){
        this.movimentoctreceberService = movimentoctreceberService;
    }

    async CadastrarMovimentoTituloAbertura(req,res){

        const {codigoTitulo,dataMovimento,valorMovimento,valorMulta,valorJuros} = req.body;

        try {
            const movimento = await this.movimentoctreceberService.CadastrarMovimentoTituloAbertura(codigoTitulo,dataMovimento,valorMovimento,valorMulta,valorJuros);
            res.status(200).json(movimento);
        } catch (error) {
            res.status(500).json({error: 'Erro ao cadastrar movimento'});
        }
    }

    async CadastrarMovimentoTituloCancelamento(req,res){

        const {codigoTitulo,dataMovimento,valorMovimento,valorMulta,valorJuros} = req.body;

        try {
            const movimento = await this.movimentoctreceberService.CadastrarMovimentoTituloCancelamento(codigoTitulo,dataMovimento,valorMovimento,valorMulta,valorJuros);
            res.status(200).json(movimento);
        } catch (error) {
            res.status(500).json({error: 'Erro ao cadastrar movimento'});
        }
    }

    
    async CadastrarMovimentoTituloPagamento(req,res){

        const {codigoTitulo,dataMovimento,valorMovimento,valorMulta,valorJuros} = req.body;

        try {
            const movimento = await this.movimentoctreceberService.CadastrarMovimentoTituloPagamento(codigoTitulo,dataMovimento,valorMovimento,valorMulta,valorJuros);
            res.status(200).json(movimento);
        } catch (error) {
            res.status(500).json({error: 'Erro ao cadastrar movimento'});
        }
    }

}

module.exports = movimentoctreceberController;