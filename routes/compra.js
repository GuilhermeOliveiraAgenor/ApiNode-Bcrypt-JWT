var express = require('express');
var router = express.Router();

const db = require('../models');

const compraService = require('../services/compraService');
const CompraService = new compraService(db.Compra);

const compraController = require('../controllers/compraController');
const CompraController = new compraController(CompraService);

router.post('/cadastrarCompra', function(req,res){
    CompraController.cadastrarCompra(req,res);
});

router.put('/alterarCompra', function(req,res){
    CompraController.alterarCompra(req,res);
});

router.delete('/excluirCompra', function(req,res){
    CompraController.excluirCompra(req,res);
})

router.get('/listarCompra', function(req,res){
    CompraController.listarCompra(req,res);
});

router.get('/pesquisarCompra', function(req,res){
    CompraController.PesquisarCompraCodigo(req,res);
})

module.exports = router;



