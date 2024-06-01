class produtoController{

    constructor(produtoService){
        this.produtoService = produtoService;
    }

    async cadastrarProduto(req,res){

        const {nome,ativo} = req.body;

        try {
            const produto = await this.produtoService.cadastrarProduto(nome,ativo);
            res.status(200).json(produto);
        } catch (error) {
            res.status(500).json({error:'Erro ao cadastrar produto'});
        }

    }

    async alterarProduto(req,res)
    {

        const {codigo,nome, ativo} = req.body

        try {
            const produto = await this.produtoService.alterarProduto(codigo,nome,ativo);
            res.status(200).json(produto);
        } catch (error) {
            res.status(500).json({error:'Erro ao alterar produto'});
        }
    }

    async listarProduto(req,res){
        try {
            const produto = await this.produtoService.listarProduto();
            res.status(200).json(produto);
        } catch (error) {
            res.status(500).json({error:'Erro ao listar produto'});
        }
    }

    async PesquisarProdutoCodigo(req,res){

        const {codigo} = req.body;

        try {
            const produto = await this.produtoService.PesquisarProdutoCodigo(codigo);
            res.status(200).json(produto);
        } catch (error) {
            res.status(500).json({error: 'Erro ao pesquisar produto'});
        }
    }

    async excluirProduto(req,res){
        
        const {codigo} = req.body;

        try {
            const produto = await this.produtoService.excluirProduto(codigo);
            res.status(200).json(produto);
        } catch (error) {
            res.status(500).json({error: 'Erro ao excluir produto'});
        }
    }

}

module.exports = produtoController;
