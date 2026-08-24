const getUser = (req, res) => {
    const {name, email, avatarURL} = req.user
    
    res.status(200).json({
        response: 'success',
        status: 200,
        data: {name, email, avatarURL}
    })
}
module.exports = getUser
