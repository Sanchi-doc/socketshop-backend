const { User } = require('../../models/user')
const createToken = require('../../utils/createToken')
const customError = require('../../utils/customError')

const login = async (req, res, next) => {
    const{email, password} = req.body
    const user = await User.findOne({email})

    if(!user){
        next(customError('email or password is not correct', 401))
    }

    const pass = await user?.verifyPassword(password)

    if(!pass){
        next(customError('error or password is not correct', 401))
    }

    const payload = {
        id: user._id
    }

    const token = createToken(payload)
    await User.findByIdAndUpdate(user._id, {
        token 
    })

    res.status(200).json({
        response: 'success',
        status: 200,
        data: {token, email, name: user.name}
    })
}

module.exports = login
