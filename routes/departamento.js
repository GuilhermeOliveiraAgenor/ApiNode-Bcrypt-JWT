var express = require('express');
var router = express.Router();

const db = require('../models');

const departamentoService = require('../services/departamentoService');
const DepartamentoService = new departamentoService(db.Departamento);

const departamentoController = require('../controllers/departamentoController');
const DepartamentoController = new departamentoController(DepartamentoService);

router.post('/cadastrarDepartamento', function(req,res){
    DepartamentoController.cadastrarDepartamento(req,res);
});

router.put('/alterarDepartamento', function(req,res){
    DepartamentoController.alterarDepartamento(req,res);
});

router.delete('/excluirDepartamento', function(req,res){
    DepartamentoController.excluirDepartamento(req,res);
})

router.get('/listarDepartamento', function(req,res){
    DepartamentoController.listarDepartamento(req,res);
});


module.exports = router;



