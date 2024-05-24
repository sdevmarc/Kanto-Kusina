const Products = require('../models/Products.model')

const ProductController = {
    AddProductWithoutImage: async (req, res) => {
        try {
            const values = req.body

            const AddProduct = await Products.create(values)

            if (AddProduct) {
                res.json({ success: true, message: 'Item added successfully!', data: AddProduct })
            } else {
                res.json({ success: false, message: 'Item failed to add!!' })
            }

        } catch (error) {
            res.json({ success: false, message: `Error adding product controller: ${error}` })
        }
    },
    AddProductWithImage: async (req, res) => {
        try {
            const { userId, productName, productDetails, productPrice } = req.body
            const productPhoto = req.file.filename;

            const newProduct = new Products({
                userId: userId,
                productInformation: {
                    productName: productName,
                    productDetails: productDetails,
                    productPhoto: productPhoto,
                    productPrice: productPrice
                }
            });

            const AddProduct = await newProduct.save();

            if (AddProduct) {
                res.json({ success: true, message: 'Item added successfully!', data: AddProduct })
            } else {
                res.json({ success: false, message: 'Item failed to add!!' })
            }

        } catch (error) {
            res.json({ success: false, message: `Error adding product controller: ${error}` })
        }
    },
    GetAllProducts: async (req, res) => {
        try {
            const GetAllProducts = await Products.find()

            res.json({ success: true, message: 'Products fetched successfully!', data: GetAllProducts })
        } catch (error) {
            res.json({ success: false, message: `Error getting all products controller: ${error}` })
        }
    },
    SearchProduct: async (req, res) => {
        try {
            const { searchId } = req.params

            const SearchProduct = await Products.find(
                {
                    "productInformation.productName": { $regex: new RegExp(searchId, 'i') }
                }
            )

            res.json({ success: true, message: 'Product successfully fetched!', data: SearchProduct })
        } catch (error) {
            res.json({ success: false, message: `Error searching product controller: ${error}` })
        }
    },
    UpdateProductWithoutImage: async (req, res) => {
        try {
            const { productId, userId, productInformation} = req.body
            const { productName, productDetails, productPrice } = productInformation

            const updatedProduct = await Products.findByIdAndUpdate(
                productId,
                {
                    userId: userId,
                    "productInformation.productName": productName,
                    "productInformation.productDetails": productDetails,
                    "productInformation.productPrice": productPrice,
                },
                {
                    new: true
                }
            )
            if (updatedProduct) {
                res.json({ success: true, message: 'Product updated successfully!', data: updatedProduct })
            } else {
                res.json({ success: false, message: 'Product failed to update!' })
            }

        } catch (error) {
            res.json({ success: false, message: `Error updating product controller: ${error}` })
        }
    },
    UpdateProductWithImage: async (req, res) => {
        try {
            const { productId, userId, productName, productDetails, productPrice } = req.body
            const productPhoto = req.file.filename;

            const updatedProduct = await Products.findByIdAndUpdate(
                productId,
                {
                    userId: userId,
                    "productInformation.productName": productName,
                    "productInformation.productDetails": productDetails,
                    "productInformation.productPhoto": productPhoto,
                    "productInformation.productPrice": productPrice,
                },
                {
                    new: true
                }
            )
            if (updatedProduct) {
                res.json({ success: true, message: 'Product updated successfully!', data: updatedProduct })
            } else {
                res.json({ success: false, message: 'Product failed to update!' })
            }
        } catch (error) {
            res.json({ success: false, message: `Error updating product controller: ${error}` })
        }
    },
    DeleteProduct: async (req, res) => {
        try {
            const { productId } = req.body;

            const DeleteProduct = await Products.findByIdAndDelete(productId);

            if (DeleteProduct) {
                res.json({ success: true, message: 'Product deleted successfully!' });
            } else {
                res.json({ success: false, message: 'Product deletion failed!' });
            }
        } catch (error) {
            res.json({ success: false, message: `Error deleting product controller: ${error}` })
        }
    },
}

module.exports = ProductController