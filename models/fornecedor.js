const Sequelize = require('sequelize');
module.exports = (sequelize) =>{

    const Fornecedor = sequelize.define('Fornecedor',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        razaoSocial:{
            type: Sequelize.STRING,
            allowNull: false
        },
        cnpj:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        ativo:{
            type: Sequelize.BOOLEAN,
            allowNull: false,
        }
        
    });

    return Fornecedor;

};
