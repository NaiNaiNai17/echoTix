const express = require('express')
const passport = require('passport')

const router = express.Router()
const controller = require('../controller/basketController')

router.use(passport.authenticate("jwt", { session: false }));

//authenticate passport here
router.post('/checkout', controller.addToBasket)
router.get('/basket', controller.listOrderByCustomer)

module.exports = router