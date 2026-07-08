const express = require('express')
const categories = require('../controllers/categories/categories')
const controlWrap = require('../utils/controlWrap')
const productRouter = express.Router()

productRouter.get('/categories', controlWrap(categories))

module.exports = productRouter