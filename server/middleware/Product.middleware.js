
const ProductMidlleware = {
    CreateProductCheckEmptyFields: async (req, res, next) => {
        try {
            const { userId, sellerId, productInformation } = req.body
            const { productName, productDetails, productPhoto, productPrice } = productInformation

            if (!userId || !sellerId || !productName || !productDetails || !productPhoto || !productPrice) {
                return res.json({ success: false, message: 'Please fill-in the required fields!' })
            } else {
                next()
            }
        } catch (error) {
            res.json({ success: false, message: `Error adding customer controller: ${error}` })
        }
    },
    SearchCheckEmptyFields: async (req, res, next) => {
        try {
            const { searchId } = req.body

            if (!searchId) {
                return res.json({ success: false, message: 'Please fill-in the required fields!' })
            } else {
                next()
            }
        } catch (error) {
            res.json({ success: false, message: `Error adding customer controller: ${error}` })
        }
    },
    UpdateCheckEmptyFields: async (req, res, next) => {
        try {
            const { productId } = req.body

            if (!productId) {
                return res.json({ success: false, message: 'Please fill-in the required fields!' })
            } else {
                next()
            }
        } catch (error) {
            res.json({ success: false, message: `Error adding customer controller: ${error}` })
        }
    },
    DeleteCheckEmptyFields: async (req, res, next) => {
        try {
            const { productId } = req.body

            if (!productId) {
                return res.json({ success: false, message: 'Please fill-in the required fields!' })
            } else {
                next()
            }
        } catch (error) {
            res.json({ success: false, message: `Error adding customer controller: ${error}` })
        }
    },
}

module.exports = ProductMidlleware