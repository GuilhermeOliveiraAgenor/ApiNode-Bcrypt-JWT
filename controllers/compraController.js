class compraController{

    constructor(compraService){
        this.compraService = compraService;
    }
    
    async cadastrarCompra(req,res){

        const {codigoFornecedor,codigoCotacao,comprador,codigoProduto,quantidade,custoUnitario,statusCompra, codigoDeposito, dataCompra} = req.body;

        try {
            const compra = await this.compraService.cadastrarCompra(codigoFornecedor,codigoCotacao,comprador,codigoProduto,quantidade,custoUnitario,statusCompra,codigoDeposito, dataCompra);
            res.status(200).json(compra);
        } catch (error) {
            res.status(500).json({error:'Erro ao cadastrar compra'})
        }

    }

    
    async alterarCompra(req,res){

        const {statusCompra,codigo} = req.body;

        try {
            const compra = await this.compraService.alterarCompra(statusCompra,codigo);
            res.status(200).json(compra);
        } catch (error) {
            res.status(500).json({error: 'Erro ao alterar compra'});
        }

    }

    async excluirCompra(req,res){

        const {codigo} = req.body;

        try {
            const compra = await this.compraService.excluirCompra(codigo);
            res.status(200).json(compra);
        } catch (error) {
            res.status(500).json({error: 'Erro ao excluir compra'});
        }

    }

    async listarCompra(req,res){
        
        try {
            const compra = await this.compraService.listarCompra();
            res.status(200).json(compra);
        } catch (error) {
            res.status(500).json({error: 'Erro ao listar compra'});
        }

    }

    async PesquisarCompraCodigo(req,res){

        const {codigo} = req.body;

        try {
            const compra = await this. compraService.PesquisarCompraCodigo(codigo);
            res.status(200).json(compra);
        } catch (error) {
            res.status(500).json({error: 'Erro ao pesquisar compra'});
        }
    }
    
}


module.exports = compraController;