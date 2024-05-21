const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    productInformation: {
        productName: {
            type: String,
            required: true
        },
        productDetails: {
            type: String,
            required: true
        },
        productPhoto: {
            type: String,
            required: true
        },
        productPrice: {
            type: String,
            required: true
        }
    }
}, { timestamps: true })

const ProductModel = mongoose.model('Products', ProductSchema)
module.exports = ProductModel