var express = require('express');
var router = express.Router();

const db = require('../models');

const movimentoProdutoService = require('../services/MovimentoProdutoService');
const MovimentoProdutoService = new movimentoProdutoService(db.movimentoProduto);

const movimentoProdutoController = require('../controllers/MovimentoProdutoController');
const MovimentoProdutoController = new movimentoProdutoController(MovimentoProdutoService);

router.post('/cadastrarMovimento', function(req,res){
    MovimentoProdutoController.CadastrarMovimentoProduto(req,res);
});

router.get('/PesquisarCodigoProduto', function(req,res){
    MovimentoProdutoController.PesquisarCodigoProduto(req,res);
})

router.get('/PesquisarCodigoDeposito', function(req,res){
    MovimentoProdutoController.PesquisarCodigoDeposito(req,res);
})

router.get('/PesquisarDataMovimento', function(req,res){
    MovimentoProdutoController.PesquisarDataMovimento(req,res);
});

module.exports = router;