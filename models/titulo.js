const Sequelize = require('sequelize');
module.exports = (sequelize) =>{
const titulo = sequelize.define('titulo',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    notaFiscal:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: 'notafiscals',
            key: 'id',
        }
    },
    numeroParcelas:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    valorOriginal:{
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    dataVencimento:{
        type: Sequelize.DATE,
        allowNull: false,
    },
    situacao:{
        type: Sequelize.STRING,
        allowNull: false,
    },
})

    return titulo;

}