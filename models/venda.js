const Sequelize = require('sequelize');
module.exports = (sequelize) =>{
    const venda = sequelize.define('venda',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        codigoCliente:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references:{
                model: 'clientes',
                key: 'id'
            }
        },
        numeroNF:{  
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        dataVenda:{
            type: Sequelize.DATE,
            allowNull: false,
        },
    });

    return venda;

}