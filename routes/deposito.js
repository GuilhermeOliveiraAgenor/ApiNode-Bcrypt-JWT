var express = require('express');
var router = express.Router();

const db = require('../models');

const depositoService = require('../services/depositoService');
const DepositoService = new depositoService(db.Deposito);

const depositoController = require('../controllers/depositoController');
const DepositoController = new depositoController(DepositoService);

router.post('/cadastrarDeposito', function(req,res){
    DepositoController.cadastrarDeposito(req,res);
});

router.put('/alterarDeposito', function(req,res){
    DepositoController.alterarDeposito(req,res);
})

router.get('/listarDeposito', function(req,res){
    DepositoController.listarDeposito(req,res);
})

router.get('/PesquisarDepositoCodigo', function(req,res){
    DepositoController.PesquisarDepositoCodigo(req,res);
});


module.exports = router;
