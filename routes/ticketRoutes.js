//axios and controller to connect to api
const express = require('express')
const passport = require('passport')

const router = express.Router()
const controller = require('../controller/ticketController')


router.get('/listEvents', controller.showInfo)
router.use('/search', searchByName.showInfo)


module.exports = router