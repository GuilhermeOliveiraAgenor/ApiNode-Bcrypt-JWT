var express = require('express');
var router = express.Router();

const db = require('../models');

const requisicaoService = require('../services/requisicaoService');
const RequisicaoService = new requisicaoService(db.Requisicao);

const requisicaoController = require('../controllers/requisicaoController');
const RequisicaoController = new requisicaoController(RequisicaoService);

router.post('/cadastrarRequisicao', function(req,res){
    RequisicaoController.cadastrarRequisicao(req,res);
});

router.put('/alterarRequisicao', function(req,res){
    RequisicaoController.alterarRequisicao(req,res);
});

router.delete('/excluirRequisicao', function(req,res){
    RequisicaoController.excluirRequisicao(req,res);
})

router.get('/listarRequisicao', function(req,res){
    RequisicaoController.listarRequisicao(req,res);
});

router.get('/pesquisarRequisicao', function(req,res){
    RequisicaoController.PesquisarRequisicaoCodigo(req,res);
});


module.exports = router;
