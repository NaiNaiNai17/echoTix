//axios and controller to connect to api
const express = require('express')
const passport = require('passport')

const router = express.Router()
const controller = require('../controller/ticketController')


router.get('/listevents', controller.showInfo)
router.get('/attractions', controller.searchByName)
// router.get('/price', controller.getMinPrice)

module.exports = router