const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    contactno: {
        type: String,
        required: true
    },
    personalDetails: {
        lastname: {
            type: String
        },
        firstname: {
            type: String
        },
        middlename: {
            type: String
        }
    }
}, { timestamps: true })

const CustomerModel = mongoose.model('Customers', CustomerSchema)
module.exports = CustomerModel