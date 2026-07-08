const express = require('express')
const register = require('../controllers/auth/register')
const login = require('../controllers/auth/login')
const logout = require('../controllers/auth/logout')
const refresh = require('../controllers/auth/refresh')
const controlWrap = require('../utils/controlWrap')
const validation = require('../utils/validation')
const auth = require('../middlewares/auth')
const {JoiRegisterSchema, JoiLoginSchema} = require('../models/user')

const authRouter = express.Router()

authRouter.post('/register', validation(JoiRegisterSchema), controlWrap(register))
authRouter.post('/login', validation(JoiLoginSchema), controlWrap(login))
authRouter.post('/logout', auth, controlWrap(logout))
authRouter.get('/refresh', auth, controlWrap(refresh))

module.exports = authRouter