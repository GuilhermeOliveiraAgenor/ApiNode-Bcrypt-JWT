var express = require('express');
var router = express.Router();

const db = require('../models');

const nfService = require('../services/nfService');
const NfService = new nfService(db.notafiscal);

const nfController = require('../controllers/nfController');
const NfController = new nfController(NfService);   

router.post('/cadastrarNF', function(req,res){
    NfController.CadastrarNotaFiscal(req,res);
});

module.exports = router;

