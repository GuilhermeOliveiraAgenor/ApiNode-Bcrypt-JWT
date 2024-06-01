var express = require('express');
var router = express.Router();

const db = require('../models');

const tituloService = require('../services/tituloService');
const TituloService = new tituloService(db.titulo);

const tituloController = require('../controllers/tituloController');
const TituloController = new tituloController(TituloService);

router.post('/cadastrarTitulo', function(req,res){
    TituloController.cadastrarTitulo(req,res);
});

module.exports = router;
