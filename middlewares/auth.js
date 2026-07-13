const { User } = require('../models/user')
const { SECRET_KEY }= process.env
const customError = require('../utils/customError')
const jwt = require('jsonwebtoken')

const auth = async(req, _, next) => {
    const {authorization = ''} = req.headers
    const [bearer, token] = authorization.split(' ')
    
    try {
        if(bearer !== 'Bearer' || !token) {
            throw customError('Unauthorized', 401)
        }

        const {id} = jwt.verify(token, SECRET_KEY)
        const user = await User.findById(id)

        if(!user || !user.token || token !== user.token) {
            throw customError('Unauthorized', 401)
        }

        req.user = user

        next()
        
    } catch (error){

        if(error.message === 'invalid signature') {
            error.status = 401
        }
        next(error)
    }
}
module.exports = auth