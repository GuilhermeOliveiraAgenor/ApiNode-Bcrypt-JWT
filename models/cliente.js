const Sequelize = require('sequelize');
module.exports = (sequelize) =>{

    const cliente = sequelize.define('cliente',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        cpf:{
            type: Sequelize.STRING,
            allowNull: false
        },
        nome:{
            type: Sequelize.STRING,
            allowNull: false,
        },
    });

    return cliente;

};
