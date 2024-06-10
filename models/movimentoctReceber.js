const Sequelize = require('sequelize');
module.exports = (sequelize) =>{
    const movimentoctreceber = sequelize.define('movimentoctreceber',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        codigoTitulo:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references:{
                model: 'titulosrecebers',
                key: 'id'
            }
        },
        dataMovimento:{
            type: Sequelize.DATE,
            allowNull: false,
        },
        tipoMovimento:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        valorMovimento:{
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        valorMulta:{
            type: Sequelize.FLOAT,
            allowNull: false
        },
        valorJuros:{
            type: Sequelize.FLOAT,
            allowNull: false,
        },
    });

    return movimentoctreceber;

}