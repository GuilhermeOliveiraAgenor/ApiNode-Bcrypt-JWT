var express = require('express');
var router = express.Router();

const db = require('../models');

const fornecedorService = require('../services/fornecedorService');
const FornecedorService = new fornecedorService(db.Fornecedor);

const fornecedorController = require('../controllers/fornecedorController');
const FornecedorController = new fornecedorController(FornecedorService);

router.post('/cadastrarFornecedor', function(req,res){
    FornecedorController.cadastrarFornecedor(req,res);
});

router.put('/alterarFornecedor', function(req,res){
    FornecedorController.alterarFornecedor(req,res);
});

router.delete('/excluirFornecedor', function(req,res){
    FornecedorController.excluirFornecedor(req,res);
})

router.get('/listarFornecedor', function(req,res){
    FornecedorController.listarFornecedor(req,res);
});




module.exports = router;



