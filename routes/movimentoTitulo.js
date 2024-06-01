var express = require('express');
var router = express.Router();

const db = require('../models');

const movimentotituloService = require('../services/movimentotituloService');
const MovimentotituloService = new movimentotituloService(db.movimentotitulo);

const movimentotituloController = require('../controllers/movimentotituloController');
const MovimentotituloController = new movimentotituloController(MovimentotituloService);

router.post('/cadastrarMovimento', function(req,res){
    MovimentotituloController.CadastrarMovimentoTitulo(req,res);
});

module.exports = router;
