const Customers = require('../models/Customers.model')

const CustomersMidlleware = {
    CreateCheckEmptyFields: async (req, res, next) => {
        try {
            const { username, password, contactno, personalDetails } = req.body
            const { lastname, firstname, middlename } = personalDetails

            if (!username || !password || !contactno || !lastname || !firstname || !middlename) {
                return res.json({ success: false, message: 'Please fill-in the required fields!' })
            } else {
                next()
            }
        } catch (error) {
            res.json({ success: false, message: `Error adding customer controller: ${error}` })
        }
    },
    CreateCustomerCheckUsernameIfExists: async (req, res, next) => {
        try {
            const { username } = req.body

            const CheckUsernameIfExists = await Customers.findOne({ username: username })

            if (CheckUsernameIfExists) {
                return res.json({ success: false, message: 'Username already exists!' })
            } else {
                next()
            }
        } catch (error) {
            res.json({ success: false, message: `Error adding customer controller: ${error}` })
        }
    },
}

module.exports = CustomersMidlleware