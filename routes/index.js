const router = require('express').Router()

router.use('/api', require('./workoutRoutes.js'))
router.use('', require('./htmlRoutes.js'))
module.exports = router
