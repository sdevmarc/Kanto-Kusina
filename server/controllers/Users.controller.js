const Users = require('../models/Users.model')

const UserController = {
    AddUser: async (req, res) => {
        try {
            const values = req.body

            const AddUser = await Users.create(values)

            if (AddUser) {
                res.json({ success: true, message: 'User added successfully!' })
            } else {
                res.json({ success: false, message: 'User failed to add!!' })
            }
        } catch (error) {
            res.json({ success: false, message: `Error adding user uontroller: ${error}` })
        }
    }
}

module.exports = UserController