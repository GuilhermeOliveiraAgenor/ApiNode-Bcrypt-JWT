var express = require('express');
var router = express.Router();

const db = require('../models');

const centroService = require('../services/centroService');
const CentroService = new centroService(db.Centro);

const centroController = require('../controllers/centroController');
const CentroController = new centroController(CentroService);

router.post('/cadastrarCentro', function(req,res){
    CentroController.cadastrarCentro(req,res);
});

router.put('/alterarCentro', function(req,res){
    CentroController.alterarCentro(req,res);
});

router.delete('/excluirCentro', function(req,res){
    CentroController.excluirCentro(req,res);
})

router.get('/listarCentro', function(req,res){
    CentroController.listarCentro(req,res);
});



module.exports = router;



