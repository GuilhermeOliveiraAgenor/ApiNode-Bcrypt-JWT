class userController{

    constructor(userService){
        this.userService = userService;
    }

    async create(req,res){
        
        const {nome,email,senha,codigoDepartamento} = req.body;
        
        try {
            
            const usuario = await this.userService.cadastrarUsuario(nome,email,senha, codigoDepartamento);
            res.status(200).json(usuario + '\nUsuário cadastrado');

        } catch (error) {
            res.status(500).json({error:'Erro ao cadastrar usuário'});
        }

    }

    async Login(req,res){
        
        const {email, senha} = req.body;
        console.log('iuiouiooi');
        
        try {
            
            const usuario = await this.userService.Login(email,senha);
            res.status(200).json(usuario);

        } catch (error) {
            res.status(500).json({error:'Erro ao pesquisar usuário'});
        }

    }

    async PesquisarUsuarioId(req,res){

        const {codigo} = req.body;

        try {
            const idUsuario = await  this.userService.PesquisarUsuarioId(codigo);
            res.status(200).json(idUsuario);

        } catch (error) {
            res.status.json({error: 'Erro ao pesquisar usuário'})
        }
    }

    async listarUsuarios(req,res){
        const token = req.headers.authorization;
        try {
            const usuarios = await this.userService.listarUsuarios(token);
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({error: 'Erro ao pesquisar usuários'});
        }
    }

}
module.exports = userController;