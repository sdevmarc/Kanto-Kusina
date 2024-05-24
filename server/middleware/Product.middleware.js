
const ProductMidlleware = {
    CreateProductCheckEmptyFields: async (req, res, next) => {
        try {
            const { userId, productInformation } = req.body
            const { productName, productDetails, productPrice } = productInformation

            if (!userId || !productName || !productDetails || !productPrice) {
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
            const { searchId } = req.params

            if (!searchId) {
                return res.json({ success: false, message: 'Please fill-in the required fields!' })
            } else {
                next()
            }
        } catch (error) {
            res.json({ success: false, message: `Error adding customer controller: ${error}` })
        }
    },
    UpdateWithoutImageCheckEmptyFields: async (req, res, next) => {
        try {
            const { productId, userId, productInformation } = req.body
            const { productName, productDetails, productPrice } = productInformation

            if (!productId || !productName || !productDetails || !productPrice || !userId) {
                return res.json({ success: false, message: 'Please fill-in the required fields!', })
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