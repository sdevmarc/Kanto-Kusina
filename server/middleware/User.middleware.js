const Users = require('../models/Users.model')

const UsersMidlleware = {
    CreateCheckEmptyFields: async (req, res, next) => {
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
    CreateUserCheckUsernameIfExists: async (req, res, next) => {
        try {
            const { username } = req.body

            const CheckUsernameIfExists = await Users.findOne({ username: username })

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

module.exports = UsersMidlleware