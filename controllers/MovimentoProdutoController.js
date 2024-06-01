class MovimentoProdutoController{

    constructor(MovimentoProdutoService){
        this.MovimentoProdutoService = MovimentoProdutoService;
    }

    async CadastrarMovimentoProduto(req,res){

        const {codigoDeposito, codigoProduto, tipoMovimento, quantidade, precoUnitario, dataMovimento} = req.body;
        
        try {
            const movimentoProduto = await this.MovimentoProdutoService.CadastrarMovimentoProduto(codigoDeposito,codigoProduto,tipoMovimento,quantidade,precoUnitario,dataMovimento);
            res.status(200).json(movimentoProduto);
        } catch (error) {
            res.status(500).json({error:'Erro ao cadastrar movimento do produto'});
        }
    }

    async PesquisarCodigoProduto(req,res){

        const {codigo} = req.body;

        try {
            const movimentoProduto = await this.MovimentoProdutoService.PesquisarCodigoProduto(codigo);
            res.status(200).json(movimentoProduto);
        } catch (error) {
            res.status(500).json({error:'Erro ao pesquisar produto'});
        }
    }

    async PesquisarCodigoDeposito(req,res){

        const {codigo} = req.body;

        try {
            const movimentoProduto = await this.MovimentoProdutoService.PesquisarCodigoDeposito(codigo);
            res.status(200).json(movimentoProduto);
        } catch (error) {
            res.status(500).json({error:'Erro ao pesquisar movimento'});
        }
    }

    async PesquisarDataMovimento(req,res){

        const {dataInicial,dataFinal} = req.body;

        try {
            const movimentoProduto = await this.MovimentoProdutoService.PesquisarDataMovimento(dataInicial, dataFinal);
            res.status(200).json(movimentoProduto);
        } catch (error) {
            res.status(500).json({error:'Erro ao pesquisar movimento'});
        }
    }

    async AlterarMovimentoProduto(req,res){

        const {tipoMovimento, quantidade,precoUnitario,dataMovimento,codigo} = req.body;

        try {
            const movimentoProduto = await this.MovimentoProdutoService.AlterarMovimentoProduto(tipoMovimento,quantidade,precoUnitario,dataMovimento,codigo);
            res.status(200).json(movimentoProduto);
        } catch (error) {
            res.status(500).json({error: 'Erro ao alterar movimento produto'})
        }
    }

    async ExcluirMovimentoProduto(req,res){
        
        const {codigo} = req.body;
        
        try {
            const movimentoProduto = await this.MovimentoProdutoService.ExcluirMovimentoProduto(codigo);
            res.status(200).json(movimentoProduto);
        } catch (error) {
            res.status(500).json({error: 'Erro ao excluir movimento produto'});
        }

    }

}

module.exports = MovimentoProdutoController;