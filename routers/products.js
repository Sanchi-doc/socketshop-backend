const express = require('express')
const categories = require('../controllers/categories/categories')
const addCategories = require('../controllers/categories/addCategories')
const controlWrap = require('../utils/controlWrap')
const upload = require('../middlewares/upload')
const productRouter = express.Router()

productRouter.get('/categories', controlWrap(categories))
productRouter.post('/categories', upload.single('image'), controlWrap(addCategories))

module.exports = productRouter