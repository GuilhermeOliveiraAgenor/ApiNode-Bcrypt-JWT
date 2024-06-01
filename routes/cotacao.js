var express = require('express');
var router = express.Router();

const db = require('../models');

const cotacaoService = require('../services/cotacaoService');
const CotacaoService = new cotacaoService(db.Cotacao);

const cotacaoController = require('../controllers/cotacaoController');
const CotacaoController = new cotacaoController(CotacaoService);

router.post('/cadastrarCotacao', function(req,res){
    CotacaoController.cadastrarCotacao(req,res);
});


router.put('/alterarCotacao', function(req,res){
    CotacaoController.alterarCotacao(req,res);
});

router.delete('/excluirCotacao', function(req,res){
    CotacaoController.excluirCotacao(req,res);
})

router.get('/listarCotacao', function(req,res){
    CotacaoController.listarCotacao(req,res);
});

router.get('/pesquisarCotacao', function(req,res){
    CotacaoController.PesquisarCotacaoCodigo(req,res);
})


module.exports = router;



