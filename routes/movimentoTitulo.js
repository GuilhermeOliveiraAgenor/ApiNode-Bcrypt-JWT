var express = require('express');
var router = express.Router();

const db = require('../models');

const movimentotituloService = require('../services/movimentotituloService');
const MovimentotituloService = new movimentotituloService(db.movimentotitulo);

const movimentotituloController = require('../controllers/movimentotituloController');
const MovimentotituloController = new movimentotituloController(MovimentotituloService);

router.post('/cadastrarMovimentoAbertura', function(req,res){
    MovimentotituloController.CadastrarMovimentoAbertura(req,res);
});

router.post('/cadastrarMovimentoPagamento', function(req,res){
    MovimentotituloController.CadastrarMovimentoPagamento(req,res);
});

router.post('/cadastrarMovimentoCancelamento', function(req,res){
    MovimentotituloController.CadastrarMovimentoCancelamento(req,res);
});

module.exports = router;
