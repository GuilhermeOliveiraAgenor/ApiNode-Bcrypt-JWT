var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var depositoRouter = require('./routes/deposito');
var produtoRouter = require('./routes/produto');
var MovimentoProdutoRouter = require('./routes/movimentoProduto');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/deposito', depositoRouter);
app.use('/produto', produtoRouter);
app.use('/movimento', MovimentoProdutoRouter);

const db = require('./models');//sequelize le models para criar tabela

async function ApplyMigration(){

try {
    
    migration_config={//definir que migration pode gerir
        create: true,
        alter: true
    };
    
    await db.sequelize.sync({
    
        alter: migration_config.alter
    
    });
    console.log('Sincronização com o banco de dados');
} catch (error) {
    console.log('Erro sincronizando banco de dados');
}
}

ApplyMigration();

var port = '3000';
app.listen(port);
console.log('teste');

module.exports = app;
