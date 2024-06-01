const Sequelize = require('sequelize');
const { all } = require('../routes');
module.exports = (sequelize) =>{

    const Requisicao = sequelize.define('Requisicao',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        comprador:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references:{
                model: 'users',
                key: 'id'
            }
        },
        codigoProduto:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references:{
                model: 'produtos',
                key: 'id'
            }
        },
        quantidade:{
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        centroCusto:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references:{
                model: 'centros',
                key: 'id'
            }
        },
        statusRequisicao:{
            type: Sequelize.STRING,
            allowNull: false,
        },


    });

    return Requisicao;

}