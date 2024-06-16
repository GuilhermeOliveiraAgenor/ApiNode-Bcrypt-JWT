var express = require('express');
var router = express.Router();

const db = require('../models');

const movimentoctreceberService = require('../services/movimentoctreceberService');
const MovimentoctreceberService = new movimentoctreceberService(db.movimentoctreceber);

const movimentoctreceberController = require('../controllers/movimentoctreceberController');
const MovimentoctreceberController = new movimentoctreceberController(MovimentoctreceberService);

router.post('/cadastrarMovimento', function(req,res){
    MovimentoctreceberController.CadastrarMovimentoTituloReceber(req,res);
});

module.exports = router;
