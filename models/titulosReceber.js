const Sequelize = require('sequelize');
module.exports = (sequelize) =>{
const tituloreceber = sequelize.define('tituloreceber',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    notaFiscal:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: 'vendas',
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

    return tituloreceber;

}