const express = require('express')
const passport = require('passport')

const router = express.Router()
const controller = require('../controller/userController')

router.post('/register', controller.registerUser)




module.exports = router