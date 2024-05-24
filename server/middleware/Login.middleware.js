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

            checkUsers = await Users.find()
            console.log(checkUsers)
            
            if(checkUsers.length > 0 ) {
                const CheckUsernameIfMatched = await Users.findOne({ username: username })
                if (CheckUsernameIfMatched) {
                    next()
                } else {
                    return res.json({ success: false, message: 'Invalid Credentials' })
                }
            } else {
                return res.json({ success: true, message: 'Admin login' })
            }

          
        } catch (error) {
            res.json({ success: false, message: `Error adding customer controller: ${error}` })
        }
    },
    CheckUserPasswordIfMatched: async (req, res) => {
        try {
            const { username, password } = req.body

            const CheckUsernameIfMatched = await Users.findOne({ username: username })

            if (CheckUsernameIfMatched) {
                console.log('Tite', password)
                if (password === CheckUsernameIfMatched?.password) {
                    return res.json({ success: true, message: 'User Authorized!', userId: CheckUsernameIfMatched?._id })
                } else {
                    return res.json({ success: false, message: 'User not Authorized!' })
                }

            } else {
                return res.json({ success: false, message: 'Invalid Credentials' })
            }
        } catch (error) {
            res.json({ success: false, message: `Error adding customer controller: ${error}` })
        }
    }
}

module.exports = LoginMiddleware