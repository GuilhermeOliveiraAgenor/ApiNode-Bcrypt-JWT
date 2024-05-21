const Sequelize = require('sequelize');
module.exports = (sequelize) =>{
    const Deposito = sequelize.define('Deposito', {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        descricao:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        ativo:{
            type: Sequelize.BOOLEAN,
            allowNull: false,
        }
    });
    return Deposito;
};