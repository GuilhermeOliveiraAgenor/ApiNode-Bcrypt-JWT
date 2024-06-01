class nfController{

    constructor(nfService){
        this.nfService = nfService;
    }

    async CadastrarNotaFiscal(req,res){

        const {codigoProduto,quantidade,custoUnitario,parcelas,numeroNota} = req.body;

        try {
            const notaFiscal = await this.nfService.CadastrarNotaFiscal(codigoProduto,quantidade,custoUnitario,parcelas,numeroNota);
            res.status(200).json(notaFiscal);
        } catch (error) {
            res.status(500).json({error: 'Erro ao cadastrar nota fiscal'});
        }

    }

}

module.exports = nfController;

