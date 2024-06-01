const Sequelize = require('sequelize');
module.exports = (sequelize) =>{

    const Cotacao = sequelize.define('Cotacao',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        codigoProduto:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references:{
                model: 'produtos',
                key: 'id'
            }
        },
        codigoFornecedor:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references:{
                model: 'fornecedors',
                key: 'id'
            }
        },
        preco:{
            type: Sequelize.DECIMAL,
            allowNull: false,
        },
        dataCotacao:{
            type: Sequelize.DATE,
            allowNull: false
        },
        comprador:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references:{
                model: 'users',
                key: 'id'
            }
        },
        dataValidade:{
            type: Sequelize.DATE,
            allowNull: false,
        },
        statusCotacao:{
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Cotacao;

}

