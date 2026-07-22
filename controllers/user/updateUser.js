const { User } = require('../../models/user')
const customError = require('../../utils/customError')
const updateUser = async (req, res) => {
    const {body} = req
    const {_id} = req.user 
    
    const updatedUser = await User.findByIdAndUpdate(req.user._id, {$set: body}, {new: true, runValidators: true})

    if (updatedUser){
        return res.status(200).json({
            response: 'success',
            status: 200,
            data: {name: updatedUser.name, email: updatedUser.email}
        })
    }else{
        throw customError('Unauthorized', 401)
    }


}

module.exports = updateUser