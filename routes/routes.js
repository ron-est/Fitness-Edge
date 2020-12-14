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

router.get('/cal', (req, res) => {
 res.sendFile(join(__dirname, '../public/cal.html'))
})

router.get('/about', (req, res) => {
 res.sendFile(join(__dirname, '../public/about.html'))
})

module.exports = router