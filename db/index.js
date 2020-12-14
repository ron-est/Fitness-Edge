//const { workout_db } = require('../keys')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.JAWSDB_URL || workout_db)

module.exports = sequelize
