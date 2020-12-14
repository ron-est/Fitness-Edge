const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Workout extends Model { }

Workout.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  muscle: {
      type: DataTypes.STRING,
      allowNull: false
  },
  sets: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  reps: {
    type: DataTypes.STRING,
    allowNull: false
  },
  weight: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT('long'),
    allowNull: true
  }
}, { sequelize, modelName: 'workout' })

module.exports = Workout
