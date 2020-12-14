const router = require('express').Router()
const { join } = require('path')

router.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../public/index.html'))
})

router.get('/calendar', (req, res) => {
  res.sendFile(join(__dirname, '../public/calendar.html'))
})

router.get('/calendarRichard', (req, res) => {
  res.sendFile(join(__dirname, '../public/calendarRichard.html'))
})

module.exports = router