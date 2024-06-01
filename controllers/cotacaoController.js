class cotacaoController{

    constructor(cotacaoService){
        this.cotacaoService = cotacaoService;
    }

    async cadastrarCotacao(req,res){

        const {codigoProduto, codigoFornecedor,preco,dataCotacao,comprador,dataValidade,statusCotacao} = req.body;

        try {
            const cotacao = await this.cotacaoService.cadastrarCotacao(codigoProduto,codigoFornecedor,preco,dataCotacao,comprador,dataValidade,statusCotacao);
            res.status(200).json(cotacao);
        } catch (error) {
            res.status(500).json({error:'Erro ao cadastrar cotacao'})
        }

    }
    
    async alterarCotacao(req,res){

        const {statusCotacao,codigo} = req.body;

        try {
            const cotacao = await this.cotacaoService.alterarCotacao(statusCotacao,codigo);
            res.status(200).json(cotacao);
        } catch (error) {
            res.status(500).json({error: 'Erro ao alterar cotacao'});
        }

    }

    async excluirCotacao(req,res){

        const {codigo} = req.body;

        try {
            const cotacao = await this.cotacaoService.excluirCotacao(codigo);
            res.status(200).json(cotacao);
        } catch (error) {
            res.status(500).json({error: 'Erro ao excluir cotacao'});
        }

    }

    async listarCotacao(req,res){
        
        try {
            const cotacao = await this.cotacaoService.listarCotacao();
            res.status(200).json(cotacao);
        } catch (error) {
            res.status(500).json({error: 'Erro ao listar cotacao'});
        }

    }
    
    async PesquisarCotacaoCodigo(req,res){

        const {codigo} = req.body;

        try {
            const cotacao = await this. cotacaoService.PesquisarCotacaoCodigo(codigo);
            res.status(200).json(cotacao);
        } catch (error) {
            res.status(500).json({error: 'Erro ao pesquisar cotacao'});
        }
    }

}

module.exports = cotacaoController;