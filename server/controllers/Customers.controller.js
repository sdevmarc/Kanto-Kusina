const Customers = require('../models/Customers.model')

const CustomerController = {
    AddCustomer: async (req, res) => {
        try {
            const values = req.body

            const AddCustomer = await Customers.create(values)

            if (AddCustomer) {
                res.json({ success: true, message: 'Customer added successfully!' })
            } else {
                res.json({ success: false, message: 'Customer failed to add!!' })
            }
        } catch (error) {
            res.json({ success: false, message: `Error adding customer controller: ${error}` })
        }
    }
}

module.exports = CustomerController