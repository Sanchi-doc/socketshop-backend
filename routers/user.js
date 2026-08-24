const express = require('express')
const getUser = require('../controllers/user/getUser')
const updateUser = require('../controllers/user/updateUser')
const controlWrap = require('../utils/controlWrap')
const auth = require('../middlewares/auth')
const upload = require('../middlewares/upload')

const userRouter = express.Router()

userRouter.get('/info', auth, controlWrap(getUser))
userRouter.patch('/info/update', auth, upload.single('avatar'),controlWrap(updateUser))

module.exports = userRouter