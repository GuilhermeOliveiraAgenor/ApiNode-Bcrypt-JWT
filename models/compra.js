const Sequelize = require('sequelize');
module.exports = (sequelize) =>{

    const Compra = sequelize.define('Compra',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        codigoFornecedor:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references:{
                model: 'fornecedors',
                key: 'id'
            }
        },
        codigoCotacao:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references:{
                model: 'cotacaos',
                key: 'id'
            }
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
        custoUnitario:{
            type: Sequelize.DECIMAL,
            allowNull: false,
        },
        statusCompra:{
            type: Sequelize.STRING,
            allowNull: false,
        },

    });

    return Compra;

}

