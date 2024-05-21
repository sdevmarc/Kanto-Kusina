const express = require('express')
const router = express.Router()

const Customers = require('../controllers/Customers.controller')
const Middleware = require('../middleware/Customer.middleware')

router.post('/addcustomer', Middleware.CreateCheckEmptyFields, Middleware.CreateCustomerCheckUsernameIfExists, Customers.AddCustomer)

module.exports = router