const jwt = require('jsonwebtoken')
require('dotenv').config()
const {SECRET_KEY} = process.env

const createToken = (payload) => {
    const token = jwt.sign(payload, SECRET_KEY)
    return token
}
module.exports = createToken