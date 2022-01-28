const express = require('express')
const passport = require('passport')

const router = express.Router()
const controller = require('../controller/userController')

router.post('/register', controller.registerUser)
router.post('/login', controller.login)
router.get('/logout', controller.logout)


module.exports = router