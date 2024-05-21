const express = require('express')
const cors = require('cors')
const app = express()

const connectDb = require('../config/dbhandler')

const UserRoute = require('../routes/Users.routes')
const ProductRoute = require('../routes/Products.routes')
const CustomerRoute = require('../routes/Customers.routes')

app.use(cors({
    origin: '*',
    methods: ['POST', 'GET'],
    credentials: true,
}))

app.use(express.json())
connectDb()

app.get('/', (req, res) => {
    res.json({
        message: `This is Home`
    })
})

app.use('/api', UserRoute)

app.use('/api', ProductRoute)

app.use('/api', CustomerRoute)


module.exports = app;