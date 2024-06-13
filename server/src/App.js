const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path');

const connectDb = require('../config/dbhandler')

const UserRoute = require('../routes/Users.routes')
const ProductRoute = require('../routes/Products.routes')
const LoginRoute = require('../routes/Login.routes')

app.use(cors({
    origin: '*',
    methods: ['POST', 'GET'],
    credentials: true,
}))

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(express.json())
connectDb()

app.get('/', (req, res) => {
    res.json({
        message: `This is Home`
    })
})

app.use('/api', LoginRoute)

app.use('/api', UserRoute)

app.use('/api', ProductRoute)

//titess

module.exports = app;
