const {Schema, model} = require('mongoose')
const Joi = require('joi')
const bcrypt = require('bcrypt')

const userDbScheme = Schema({
    name: {
        type: String,
        require: [true, 'name is required']
    }, 
    email: {
        type: String,
        require: [true, 'email is required'],
        unique: [true, 'email is already exist']
    },
    password: {
        type: String,
        require: [true, 'password is required'],
        minLenght: 6
    }, 
    token: {
      type: String,
      default: ''
    }
},
{
    versionKey: false,
    timestamps: true
}
)
userDbScheme.methods.setPassword = async function(password) {
    this.password = await bcrypt.hash(password, 10)
    
}

userDbScheme.methods.verifyPassword = async function (password) {
    return bcrypt.compare(password, this.password)
}

const User = model('user', userDbScheme)

const JoiRegisterSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
})

const JoiLoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
})

module.exports = { User, JoiRegisterSchema, JoiLoginSchema}