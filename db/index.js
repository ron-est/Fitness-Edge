const Sequelize = require('sequelize')
// REPLACE PLACEHOLDER WITH MYSQL PASSWORD
const sequelize = new Sequelize(process.env.JAWSDB_URL || 'mysql://root:PLACEHOLDER@localhost/workouts_db')

module.exports = sequelize