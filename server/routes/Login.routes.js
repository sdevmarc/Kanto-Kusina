const express = require('express')
const router = express.Router()

const LoginMiddleware = require('../middleware/Login.middleware')

router.post('/login', LoginMiddleware.LoginCheckEmptyFields, LoginMiddleware.CheckUserUsernameIfMatched, LoginMiddleware.CheckUserPasswordIfMatched)

module.exports = router