class vendaController{

    constructor(vendaService){
        this.vendaService = vendaService;
    }

    async cadastrarVenda(req,res){

        const {codigoCliente,numeroNF,dataVenda} = req.body;

        try {
            const venda = await this.vendaService.cadastrarVenda(codigoCliente,numeroNF,dataVenda);
            res.status(200).json(venda);
        } catch (error) {
            res.status(500).json({error: 'Erro ao cadastrar venda'});
        }

    }

}

module.exports = vendaController;

