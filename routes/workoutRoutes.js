const router = require('express').Router()
const { Workout } = require('../models')

router.get('/workouts', (req, res) => {
  Workout.findAll()
    .then(workouts => res.json(workouts))
    .catch(err => console.log(err))
})

router.get('/workouts/:id', (req, res) => {
  Workout.findOne({ where: { id: req.param('id') } })
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})

// router.post('/workouts', (req, res) => {
//   Workout.create(req.body)
//     .then(workout => res.json(workout))
//     .catch(err => console.log(err))
// })

// router.put('/workouts/:id', (req, res) => {
//   Workout.update(req.body, { where: { id: req.params.id } })
//     .then(() => res.sendStatus(200))
//     .catch(err => console.log(err))
// })

// router.delete('/workouts/:id', (req, res) => {
//   Workout.destroy({ where: { id: req.params.id } })
//     .then(() => res.sendStatus(200))
//     .catch(err => console.log(err))
// })

module.exports = router