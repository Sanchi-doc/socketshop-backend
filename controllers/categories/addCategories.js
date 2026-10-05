const { Category } = require('../../models/category')
const cloudinaryImgUpload = require('../../utils/claudinaryImgUpload')
const customError = require('../../utils/customError')

const addCategories = async (req, res) => {
    const { body, file } = req

    if (!body.category) {
        throw customError('category is required', 400)
    }

    if (file) {
        const { avatarURL } = await cloudinaryImgUpload(req)
        body.image = avatarURL
    }

    const newCategory = await Category.create({
        category: body.category,
        image: body.image,
        href: body.href || `/${body.category}`,
    })

    return res.status(201).json({
        response: 'success',
        status: 201,
        data: {
            id: newCategory._id,
            category: newCategory.category,
            image: newCategory.image,
            href: newCategory.href,
        },
    })
}

module.exports = addCategories