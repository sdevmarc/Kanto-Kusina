const express = require('express')
const router = express.Router()

const Users = require('../controllers/Users.controller')
const Middleware = require('../middleware/User.middleware')

router.post('/adduser', Middleware.CreateCheckEmptyFields, Middleware.CreateUserCheckUsernameIfExists, Users.AddUser)

module.exports = router