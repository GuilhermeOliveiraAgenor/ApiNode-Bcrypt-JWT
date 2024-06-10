const Sequelize = require('sequelize');
module.exports = (sequelize) =>{
const detalhevenda = sequelize.define('detalhevenda',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    codigoVenda:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: 'vendas',
            key: 'id'
        },
    },
    codigoProduto:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: 'produtos',
            key: 'id'
        },
    },
    quantidade:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    precoUnitario:{
        type: Sequelize.FLOAT,
        allowNull: false,
    },
});

    return detalhevenda;

};