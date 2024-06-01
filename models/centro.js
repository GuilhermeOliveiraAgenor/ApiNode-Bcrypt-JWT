
const Sequelize = require('sequelize');
module.exports = (sequelize) =>{

    const Centro = sequelize.define('Centro',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        codigoCusto:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        descricao:{
            type: Sequelize.STRING,
            allowNull: false,
        },

    });

    return Centro;

}

