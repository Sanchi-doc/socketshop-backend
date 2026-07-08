const express = require('express')
const getUser = require('../controllers/user/getUser')
const controlWrap = require('../utils/controlWrap')
const auth = require('../middlewares/auth')

const userRouter = express.Router()

userRouter.get('/info', auth, controlWrap(getUser))

module.exports = userRouter