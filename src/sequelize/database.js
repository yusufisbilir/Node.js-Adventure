const Sequelize = require('sequelize');

const sequelize = new Sequelize('sequelize-testdb','root','1368',{
    dialect:'mysql',
    host:'localhost'
});

module.exports = sequelize;