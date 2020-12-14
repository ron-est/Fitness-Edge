const router = require('express').Router()
const { join } = require('path')

router.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../public/index.html'))
})

router.get('/calendar', (req, res) => {
  res.sendFile(join(__dirname, '../public/calendar.html'))
})

router.get('/contact', (req, res) => {
  res.sendFile(join(__dirname, '../public/contact.html'))
})

module.exports = router