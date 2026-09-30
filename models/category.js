const {Schema, model} = require('mongoose')

const CategoryDbSchema = Schema({
    category: {
        type: String,
        require: [true, 'category is required']
    },

    image: {
        type: String,
        default: null
    },
    
    href: {
        type: String,
        default: null
    }

},
{
    versionKey: false,
    timestamps: true
})

const Category = model('category', CategoryDbSchema)

module.exports = {Category}