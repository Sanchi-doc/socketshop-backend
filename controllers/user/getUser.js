const getUser = (req, res) => {
    const {name, email} = req.user
    console.log('=============>', name);
    
    res.status(200).json({
        response: 'success',
        status: 200,
        data: {name, email}
    })
}
module.exports = getUser
