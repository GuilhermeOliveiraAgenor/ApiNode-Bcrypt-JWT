class requisicaoController{

    constructor(requisicaoService){
        this.requisicaoService = requisicaoService;
    }

    async cadastrarRequisicao(req,res){

        const {comprador,codigoProduto,quantidade,centroCusto,statusRequisicao,codigoDeposito,precoUnitario,dataCompra} = req.body;

        try {
            const requisicao = await this.requisicaoService.cadastrarRequisicao(comprador,codigoProduto,quantidade,centroCusto,statusRequisicao,codigoDeposito,precoUnitario,dataCompra);
            res.status(200).json(requisicao);
        } catch (error) {
            res.status(500).json({error: 'Erro ao cadastrar requisicao'});
        }
    }

    
    async alterarRequisicao(req,res){

        const {statusRequisicao,codigo} = req.body;

        try {
            const requisicao = await this.requisicaoService.alterarRequisicao(statusRequisicao,codigo);
            res.status(200).json(requisicao);
        } catch (error) {
            res.status(500).json({error: 'Erro ao alterar requisicao'});
        }

    }

    async excluirRequisicao(req,res){

        const {codigo} = req.body;

        try {
            const requisicao = await this.requisicaoService.excluirRequisicao(codigo);
            res.status(200).json(requisicao);
        } catch (error) {
            res.status(500).json({error: 'Erro ao excluir requisicao'});
        }

    }

    async listarRequisicao(req,res){
        try {
            const requisicao = await this.requisicaoService.listarRequisicao();
            res.status(200).json(requisicao);
        } catch (error) {
            res.status(500).json({error:'Erro ao listar requisicao'});
        }
    }

    
    async PesquisarRequisicaoCodigo(req,res){

        const {codigo} = req.body;

        try {
            const requisicao = await this. requisicaoService.PesquisarRequisicaoCodigo(codigo);
            res.status(200).json(requisicao);
        } catch (error) {
            res.status(500).json({error: 'Erro ao pesquisar requisicao'});
        }
    }

}

module.exports = requisicaoController;