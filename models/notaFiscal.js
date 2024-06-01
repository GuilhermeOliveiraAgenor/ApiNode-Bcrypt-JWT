const Sequelize = require('sequelize');
module.exports = (sequelize) =>{
const notafiscal = sequelize.define('notafiscal',{
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
        },
    },
    quantidade:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    custoUnitario:{
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    parcelas:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    numeroNota:{
        type: Sequelize.STRING,
        allowNull: false,
    },
});

    return notafiscal;

};