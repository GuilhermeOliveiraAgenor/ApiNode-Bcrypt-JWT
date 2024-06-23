var express = require('express');
var router = express.Router();

const db = require('../models');

const movimentoctreceberService = require('../services/movimentoctreceberService');
const MovimentoctreceberService = new movimentoctreceberService(db.movimentoctreceber);

const movimentoctreceberController = require('../controllers/movimentoctreceberController');
const MovimentoctreceberController = new movimentoctreceberController(MovimentoctreceberService);

router.post('/cadastrarMovimentoAbertura', function(req,res){
    MovimentoctreceberController.CadastrarMovimentoTituloAbertura(req,res);
});

router.post('/cadastrarMovimentoCancelamento', function(req,res){
    MovimentoctreceberController.CadastrarMovimentoTituloCancelamento(req,res);
});

router.post('/cadastrarMovimentoPagamento', function(req,res){
    MovimentoctreceberController.CadastrarMovimentoTituloPagamento(req,res);
});

module.exports = router;
