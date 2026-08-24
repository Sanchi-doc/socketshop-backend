const { User } = require('../../models/user')
const cloudinaryImgUpload = require('../../utils/claudinaryImgUpload')
const customError = require('../../utils/customError')
const updateUser = async (req, res) => {
    const {body, file, user} = req
    const {_id} = user 

    if(Object.keys(body).length === 0 && !file){
        throw customError('no uplading data', 500)
    }

    if(file){
        const {avatarURL} = await cloudinaryImgUpload(req)
        body.avatarURL = avatarURL
    } else{
        body.avatarURL = body.avatar
    }
    
    const updatedUser = await User.findByIdAndUpdate(user._id, {$set: body}, {new: true, runValidators: true})

    if (updatedUser){
        return res.status(200).json({
            response: 'success',
            status: 200,
            data: {name: updatedUser.name, email: updatedUser.email, avatar: updatedUser.avatarURL}
        })
    }else{
        throw customError('Unauthorized', 401)
    }


}

module.exports = updateUser