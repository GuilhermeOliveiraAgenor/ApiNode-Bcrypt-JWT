const Sequelize = require('sequelize');
module.exports = (sequelize) =>{
const xTelefone = sequelize.define('xTelefone', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    numero:{
        type: Sequelize.STRING,
        allowNull: false,
    }

});
/*
xTelefone.associate = {models} =>{
    xTelefone.belongsTo(sequelize.models.User,{
        foreingkey: 'userId',
        as: 'User'
    });
};
*/
return xTelefone;
};