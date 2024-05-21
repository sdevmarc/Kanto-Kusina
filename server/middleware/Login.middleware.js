const Customers = require('../models/Customers.model')
const Users = require('../models/Users.model')

const LoginMiddleware = {
    LoginCheckEmptyFields: async (req, res, next) => {
        try {
            const { username, password } = req.body

            if (!username || !password) {
                return res.json({ success: false, message: 'Please fill-in the required fields!' })
            } else {
                next()
            }
        } catch (error) {
            res.json({ success: false, message: `Error adding customer controller: ${error}` })
        }
    },
    CheckUserUsernameIfMatched: async (req, res, next) => {
        try {
            const { username } = req.body

            const CheckUsernameIfMatched = await Users.findOne({ username: username })
            if (CheckUsernameIfMatched) {
                next()
            } else {
                return res.json({ success: false, message: 'Invalid Credentials' })
            }
        } catch (error) {
            res.json({ success: false, message: `Error adding customer controller: ${error}` })
        }
    },
    CheckCustomerUsernameIfMatched: async (req, res, next) => {
        try {
            const { username } = req.body

            const CheckUsernameIfMatched = await Customers.findOne({ username: username })
            if (CheckUsernameIfMatched) {
                next()
            } else {
                return res.json({ success: false, message: 'Invalid Credentials' })
            }
        } catch (error) {
            res.json({ success: false, message: `Error adding customer controller: ${error}` })
        }
    },
    CheckUserPasswordIfMatched: async (req, res) => {
        try {
            const { password } = req.body

            const CheckUsernameIfMatched = await Users.findOne({ password: password })
            if (CheckUsernameIfMatched) {
                next()
            } else {
                return res.json({ success: false, message: 'Invalid Credentials' })
            }
        } catch (error) {
            res.json({ success: false, message: `Error adding customer controller: ${error}` })
        }
    },
    CheckCustomerPasswordIfMatched: async (req, res) => {
        try {
            const { password } = req.body

            const CheckUsernameIfMatched = await Customers.findOne({ password: password })
            if (CheckUsernameIfMatched) {
                next()
            } else {
                return res.json({ success: false, message: 'Invalid Credentials' })
            }
        } catch (error) {
            res.json({ success: false, message: `Error adding customer controller: ${error}` })
        }
    }
}

module.exports = LoginMiddleware