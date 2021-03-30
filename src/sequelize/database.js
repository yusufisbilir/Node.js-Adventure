const Sequelize = require('sequelize');

const db = new Sequelize('sequelize-testdb','root','1368',{
    dialect:'mysql',
    host:'localhost'
});

module.exports = db;