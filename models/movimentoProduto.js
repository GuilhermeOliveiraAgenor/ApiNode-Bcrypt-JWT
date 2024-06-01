
const Sequelize = require('sequelize');
module.exports = (sequelize) =>{
    const MovimentoProduto = sequelize.define('movimentoProduto',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        codigoDeposito:{
            type: Sequelize.INTEGER,
            allowNull:false,
            references:{
                model: 'Depositos',
                key: 'id'
            }
        },
        codigoProduto:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references:{
                model: 'Produtos',
                key:'id'
            }
        },
        tipoMovimento:{
            type: Sequelize.STRING,
            allowNull: false
        },
        quantidade:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        precoUnitario:{
            type: Sequelize.FLOAT,
            allowNull: false
        },
        dataMovimento:{
            type: Sequelize.DATE,
            allowNull: false
        }
    });
    return MovimentoProduto;
};

