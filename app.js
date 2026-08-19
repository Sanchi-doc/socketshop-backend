const express = require('express')
const cors = require('cors')
const authRouter = require('./routers/auth')
const productRouter = require('./routers/products')
const userRouter = require('./routers/user')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static("public"));

app.use('/api/auth', authRouter)
app.use('/api/products', productRouter)
app.use('/api/user', userRouter)
app.use((_,res) => {
    res.status(404).json({
        message: "not Found"
    })
})

app.use((er, _, res, ) => {
    const {status = 500, message = 'server error'} = er
    res.status(status).json({message})
})

module.exports = app