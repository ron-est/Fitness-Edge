const { Model, DataTypes } = require('sequelize')
const sequelize = require('./db')


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

Workout.bulkCreate([
  {
    title: 'Back Squat',
    muscle: 'legs',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Front Squat',
    muscle: 'legs',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Goblet Squat',
    muscle: 'legs',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Romanian Deadlift',
    muscle: 'legs',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Leg Press',
    muscle: 'legs',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Lunges',
    muscle: 'legs',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Leg Extension',
    muscle: 'legs',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Leg Curl',
    muscle: 'legs',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Calf Raise',
    muscle: 'legs',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Bench Press',
    muscle: 'chest',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Incline Bench Press',
    muscle: 'chest',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Dumbell Bench Press',
    muscle: 'chest',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Dumbell Incline Press',
    muscle: 'chest',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Seated Machine Chest Press',
    muscle: 'chest',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Seated Incline Machine Chest Press',
    muscle: 'chest',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Incline Chest Cable Fly',
    muscle: 'chest',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Pec-Deck Machine',
    muscle: 'chest',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Push Up',
    muscle: 'chest',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Overhead Press',
    muscle: 'shoulders',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Seated Dumbell Press',
    muscle: 'shoulders',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Arnold Press',
    muscle: 'shoulders',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Lateral Raise',
    muscle: 'shoulders',
    sets: 3,
    reps: '15-20',
    weight: null,
    description: null
  },
  {
    title: 'Rear Pec Deck',
    muscle: 'shoulders',
    sets: 3,
    reps: '15-20',
    weight: null,
    description: null
  },
  {
    title: 'Bent-Over Reverse Fly',
    muscle: 'shoulders',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Face Pull',
    muscle: 'shoulders',
    sets: 3,
    reps: '15-20',
    weight: null,
    description: null
  },
  {
    title: 'Handstand Pushup',
    muscle: 'shoulders',
    sets: 3,
    reps: '15-20',
    weight: null,
    description: null
  },
  {
    title: 'Crab Bridge',
    muscle: 'shoulders',
    sets: 3,
    reps: '15-20',
    weight: null,
    description: null
  },
  {
    title: 'Deadlift',
    muscle: 'back',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Barbell Row',
    muscle: 'back',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Lat Pulldown',
    muscle: 'back',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Seated Cable Row',
    muscle: 'back',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'T Bar Row',
    muscle: 'back',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Dumbell Row',
    muscle: 'back',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Inverted Row',
    muscle: 'back',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Back Extension',
    muscle: 'back',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Pull Ups',
    muscle: 'back',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Barbell Curl',
    muscle: 'biceps',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Dumbell Curl',
    muscle: 'biceps',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Hammer Curl',
    muscle: 'biceps',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Concentration Curl',
    muscle: 'biceps',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Preacher Curl',
    muscle: 'biceps',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Incline Dumbell Curl',
    muscle: 'biceps',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Cable Rope Hammer Curl',
    muscle: 'biceps',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Double Cable Flex Curl',
    muscle: 'biceps',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Standing Resistance Band Hammer Curl',
    muscle: 'biceps',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Dips',
    muscle: 'triceps',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Tricep Pushdown',
    muscle: 'triceps',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Skull Crusher',
    muscle: 'triceps',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Close-Grip Bench Press',
    muscle: 'triceps',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Rope Tricep Pushdown',
    muscle: 'triceps',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Overhead Tricep Extension',
    muscle: 'triceps',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Tricep Kickback',
    muscle: 'triceps',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Bench Dip',
    muscle: 'triceps',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Diamond Push Up',
    muscle: 'triceps',
    sets: 3,
    reps: '8-12',
    weight: null,
    description: null
  },
  {
    title: 'Ab Wheel',
    muscle: 'core',
    sets: 3,
    reps: '15-20',
    weight: null,
    description: null
  },
  {
    title: 'Hanging Leg Raise',
    muscle: 'core',
    sets: 3,
    reps: '15-20',
    weight: null,
    description: null
  },
  {
    title: 'Cable Oblique Twist',
    muscle: 'core',
    sets: 3,
    reps: '15-20',
    weight: null,
    description: null
  },
  {
    title: 'Crunch',
    muscle: 'core',
    sets: 3,
    reps: '15-20',
    weight: null,
    description: null
  },
  {
    title: 'Bicycle Crunch',
    muscle: 'core',
    sets: 3,
    reps: '15-20',
    weight: null,
    description: null
  },
  {
    title: 'Russian Twist',
    muscle: 'core',
    sets: 3,
    reps: '15-20',
    weight: null,
    description: null
  },
  {
    title: 'Wood Chop',
    muscle: 'core',
    sets: 3,
    reps: '15-20',
    weight: null,
    description: null
  },
  {
    title: 'Crunchy Frogs',
    muscle: 'core',
    sets: 3,
    reps: '15-20',
    weight: null,
    description: null
  },
  {
    title: 'In and Outs',
    muscle: 'core',
    sets: 3,
    reps: '15-20',
    weight: null,
    description: null
  }
])

sequelize.sync()

