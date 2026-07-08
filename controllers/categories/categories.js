const data = require('../../data/categories.json')
const categories = (req,res) => {
    res.status(200).json({
        data
    })
}
module.exports = categories