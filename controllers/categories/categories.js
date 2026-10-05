const {Category} = require('../../models/category')
const categories = async( _,res) => {
    const data =  await Category.find({})
    console.log('data', data)
    res.status(200).json({
        data
    })
}
module.exports = categories