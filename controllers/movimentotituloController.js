class movimentotituloController{

    constructor(movimentotituloService){
        this.movimentotituloService = movimentotituloService;
    }

    async CadastrarMovimentoTitulo(req,res){

        const {codigoTitulo,dataMovimento,tipoMovimento,valorMovimento,valorMulta,valorJuros} = req.body;

        try {
            const movimento = await this.movimentotituloService.CadastrarMovimentoTitulo(codigoTitulo,dataMovimento,tipoMovimento,valorMovimento,valorMulta,valorJuros);
            res.status(200).json(movimento);
        } catch (error) {
            res.status(500).json({error: 'Erro ao cadastrar movimento'});
        }
    }

}

module.exports = movimentotituloController;