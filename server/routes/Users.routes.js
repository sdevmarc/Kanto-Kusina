const express = require('express')
const router = express.Router()

const Users = require('../controllers/Users.controller')
const Middleware = require('../middleware/User.middleware')

router.post('/adduser', Middleware.CreateCheckEmptyFields, Middleware.CreateUserCheckUsernameIfExists, Users.AddUser)
router.get('/getalluser', Users.GetAllUsers)
router.post('/updateuser', Users.UpdateUser)

module.exports = router