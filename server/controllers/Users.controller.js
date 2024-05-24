const Users = require('../models/Users.model')

const UserController = {
    AddUser: async (req, res) => {
        try {
            const { username, password, personalDetails } = req.body

            const AddUser = await Users.create({ username, password, personalDetails })

            if (AddUser) {
                res.json({ success: true, message: 'User added successfully!' })
            } else {
                res.json({ success: false, message: 'User failed to add!!' })
            }
        } catch (error) {
            res.json({ success: false, message: `Error adding user uontroller: ${error}` })
        }
    },
    GetAllUsers: async (req, res) => {
        try {
            const data = await Users.find()
            res.json({ success: 'true', message: 'Users fetched all successfully!', data })
        } catch (error) {
            res.json({ success: false, message: `Error get all user uontroller: ${error}` })
        }
    },
    UpdateUser: async (req, res) => {
        try {
            const { id, personalDetails } = req.body
            const { lastname, firstname, middlename } = personalDetails

            const updateUser = await Users.findByIdAndUpdate(
                id,
                {
                    "personalDetails.lastname": lastname,
                    "personalDetails.firstname": firstname,
                    "personalDetails.middlename": middlename
                },
                {
                    new: true
                }
            )

            res.json({ success: true, message: 'User updated successfully!', data: updateUser })

        } catch (error) {
            res.json({ success: false, message: `Error updating user uontroller: ${error}` })
        }
    }
}

module.exports = UserController