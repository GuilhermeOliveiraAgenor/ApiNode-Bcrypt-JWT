class movimentotituloController{

    constructor(movimentotituloService){
        this.movimentotituloService = movimentotituloService;
    }

    async CadastrarMovimentoAbertura(req,res){

        const {codigoTitulo,dataMovimento,valorMovimento,valorMulta,valorJuros} = req.body;

        try {
            const movimento = await this.movimentotituloService.CadastrarMovimentoAbertura(codigoTitulo,dataMovimento,valorMovimento,valorMulta,valorJuros);
            res.status(200).json(movimento);
        } catch (error) {
            res.status(500).json({error: 'Erro ao cadastrar movimento'});
        }
    }

    async CadastrarMovimentoCancelamento(req,res){

        const {codigoTitulo,dataMovimento,valorMovimento,valorMulta,valorJuros} = req.body;

        try {
            const movimento = await this.movimentotituloService.CadastrarMovimentoCancelamento(codigoTitulo,dataMovimento,valorMovimento,valorMulta,valorJuros);
            res.status(200).json(movimento);
        } catch (error) {
            res.status(500).json({error: 'Erro ao cadastrar movimento'});
        }
    }
    
    async CadastrarMovimentoPagamento(req,res){

        const {codigoTitulo,dataMovimento,valorMovimento,valorMulta,valorJuros} = req.body;

        try {
            const movimento = await this.movimentotituloService.CadastrarMovimentoPagamento(codigoTitulo,dataMovimento,valorMovimento,valorMulta,valorJuros);
            res.status(200).json(movimento);
        } catch (error) {
            res.status(500).json({error: 'Erro ao cadastrar movimento'});
        }
    }

}

module.exports = movimentotituloController;