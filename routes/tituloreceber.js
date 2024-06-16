var express = require('express');
var router = express.Router();

const db = require('../models');

const tituloreceberService = require('../services/tituloreceberService');
const TituloreceberService = new tituloreceberService(db.tituloreceber);

const tituloreceberController = require('../controllers/tituloreceberController');
const TituloreceberController = new tituloreceberController(TituloreceberService);

router.post('/cadastrarTitulo', function(req,res){
    TituloreceberController.CadastrarTituloReceber(req,res);
});

module.exports = router;
