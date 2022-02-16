const express = require('express')
const passport = require('passport')

const router = express.Router()
const controller = require('../controller/basketController')


//authenticate passport here
router.post('/checkout', controller.ticketOrder)
router.get('/basket', controller.listOrderByCustomer)

module.exports = router