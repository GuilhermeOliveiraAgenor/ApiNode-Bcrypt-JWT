var express = require('express');
var router = express.Router();

const db = require('../models');

const vendaService = require('../services/vendaService');
const VendaService = new vendaService(db.venda);

const vendaController = require('../controllers/vendaController');
const VendaController = new vendaController(VendaService);   

router.post('/cadastrarVenda', function(req,res){
    VendaController.cadastrarVenda(req,res);
});


router.get('/listarVenda', function(req,res){
    VendaController.listarVenda(req,res);
});

module.exports = router;

