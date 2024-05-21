var express = require('express');
var router = express.Router();

const db = require('../models');

const produtoService = require('../services/produtoService');
const ProdutoService = new produtoService(db.Produto);

const produtoController = require('../controllers/produtoController');
const ProdutoController = new produtoController(ProdutoService);

router.post('/cadastrarProduto', function(req,res){
    ProdutoController.cadastrarProduto(req,res);
});

router.put('/alterarProduto', function(req,res){
    ProdutoController.alterarProduto(req,res);
})

router.get('/listarProduto', function(req,res){
    ProdutoController.listarProduto(req,res);
})

router.get('/PesquisarProdutoCodigo', function(req,res){
    ProdutoController.PesquisarProdutoCodigo(req,res);
})

module.exports = router;