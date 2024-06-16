class vendaController{

    constructor(vendaService){
        this.vendaService = vendaService;
    }

    async cadastrarVenda(req,res){

        const {codigoCliente,numeroNF,dataVenda,codigoProduto,quantidade,precoUnitario,codigoDeposito} = req.body;

        try {
            const venda = await this.vendaService.cadastrarVenda(codigoCliente,numeroNF,dataVenda,codigoProduto,quantidade,precoUnitario,codigoDeposito);
            res.status(200).json(venda);
        } catch (error) {
            res.status(500).json({error: 'Erro ao cadastrar venda'});
        }

    }

    async listarVenda(req,res){

        try {
            const venda = await this.vendaService.listarVenda();
            res.status(200).json(venda);
        } catch (error) {
            res.status(500).json({error:'Erro ao listar venda'});
        }
    }

    async ListarVendaData(req,res){

        const {dataVenda} = req.body;

        try {
            const venda = await this.vendaService.ListarVendaData(dataVenda);
            res.status(200).json(venda);
        } catch (error) {
            res.status(500).json({error:'Erro ao listar venda'});
        }
    }

    async listarVendaNF(req,res){

        const {notaFiscal} = req.body;

        try {
            const venda = await this.vendaService.listarVendaNF(notaFiscal);
            res.status(200).json(venda);
        } catch (error) {
            res.status(500).json({error:'Erro ao listar venda'});
        }
    }

}

module.exports = vendaController;

