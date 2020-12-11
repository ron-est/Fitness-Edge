const router = require('express').Router()

router.get('/*', (req, res) => {
  res.render('./index.html')
})

router.get('/calender', (req, res) => {
  res.render('./calender.html')
})

router.get('/cal', (req, res) => {
  res.render('./cal.html')
})

router.get('/about', (req, res) => {
  res.render('./about.html')
})

module.exports = router