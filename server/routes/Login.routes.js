const express = require('express')
const router = express.Router()

const LoginMiddleware = require('../middleware/Login.middleware')

router.post('/loginu', LoginMiddleware.LoginCheckEmptyFields, LoginMiddleware.CheckUserUsernameIfMatched, LoginMiddleware.CheckUserPasswordIfMatched)
router.post('/loginc', LoginMiddleware.LoginCheckEmptyFields, LoginMiddleware.CheckCustomerUsernameIfMatched, LoginMiddleware.CheckCustomerPasswordIfMatched)

module.exports = router