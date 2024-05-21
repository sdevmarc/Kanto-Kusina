const express = require('express')
const router = express.Router()

const Products = require('../controllers/Products.controller')
const Middleware = require('../middleware/Product.middleware')

router.post('/addproduct', Middleware.CreateProductCheckEmptyFields, Products.AddProduct)
router.get('/getallproducts', Products.GetAllProducts)
router.get('/searchproduct/:searchId', Middleware.SearchCheckEmptyFields, Products.SearchProduct)
router.post('/updateproduct', Middleware.UpdateCheckEmptyFields, Products.UpdateProduct)
router.post('/deleteproduct', Middleware.DeleteCheckEmptyFields, Products.DeleteProduct)

module.exports = router