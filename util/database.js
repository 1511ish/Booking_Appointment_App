const Sequelize = require('sequelize');

const sequelize = new Sequelize('appointment_booking_db','root','Password',{dialect: 'mysql', host:'localhost'});

module.exports = sequelize;