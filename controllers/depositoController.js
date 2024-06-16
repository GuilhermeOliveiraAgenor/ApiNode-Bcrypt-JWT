class depositoController{

    constructor(depositoService){
        this.depositoService = depositoService;
    }

    async cadastrarDeposito(req,res){

        const token = req.headers.authorization;
        if(auth == true){
            console.log('Usuário logado')
        }
        const {descricao,ativo} = req.body;

        try {
            const deposito = await this.depositoService.cadastrarDeposito(descricao, ativo);
            res.status(200).json(deposito);
        } catch (error) {
            res.status(500).json({error:'Erro ao cadastrar usuário'})
        }

    }

    async alterarDeposito(req,res){

        const {id, descricao, ativo} = req.body;

        try {
            const deposito = await this.depositoService.alterarDeposito(id,descricao,ativo);
            res.status(200).json(deposito);
        } catch (error) {
            res.status(500).json({error: 'Erro ao alterar depósito'});
        }

    }

    async listarDeposito(req,res){

        try {
            const deposito = await this.depositoService.listarDeposito();
            res.status(200).json(deposito);
        } catch (error) {
            res.status(500).json({error:'Erro ao listar deposito'})
        }

    }

    async PesquisarDepositoCodigo(req,res){

        const {codigo} = req.body;

        try {
            const deposito = await this.depositoService.PesquisarDepositoCodigo(codigo);
            res.status(200).json(deposito);
        } catch (error) {
            res.status(500).json({error:'Erro ao pesquisar depósito'});
        }
    }

}

module.exports = depositoController;