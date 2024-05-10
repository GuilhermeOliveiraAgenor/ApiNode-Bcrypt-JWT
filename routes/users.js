var express = require('express');
var router = express.Router();

const db = require('../models');
const userService = require('../services/userService');
const UserService = new userService(db.User);

const userController = require('../controllers/userController');
const UserController = new userController(UserService);


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('uoiuiuio');
});

router.get('/usuario', function(req, res, next) {
  res.send('uoiuiuio');
});

router.post('/cadastrarUsuario', function(req,res){

      UserController.create(req,res);

});

router.get('/PesquisarUsuarioId', function(req,res,next) {
    UserController.PesquisarUsuarioId(req,res);
});

router.get('/listarUsuarios', function(req,res,next){
    UserController.listarUsuarios(req,res);
});

router.get('/Login', function(req,res,next){
    UserController.Login(req,res);
});






module.exports = router;
