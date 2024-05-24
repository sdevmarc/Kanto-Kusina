const express = require('express')
const router = express.Router()
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const Products = require('../controllers/Products.controller')
const Middleware = require('../middleware/Product.middleware')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, '..', 'uploads');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.post('/addproduct', upload.single('productPhoto'), Products.AddProduct)
router.get('/getallproducts', Products.GetAllProducts)
router.get('/searchproduct/:searchId', Middleware.SearchCheckEmptyFields, Products.SearchProduct)
router.post('/updateproduct', Middleware.UpdateCheckEmptyFields, Products.UpdateProduct)
router.post('/deleteproduct', Middleware.DeleteCheckEmptyFields, Products.DeleteProduct)

module.exports = router