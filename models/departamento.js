const Sequelize = require('sequelize');
module.exports = (sequelize) =>{

    const Departamento = sequelize.define('Departamento',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        descricao:{
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Departamento;

}