const refresh = (req, res ) => {
    const {name, email, token} = req.user
    res.status(200).json({
        response: 'success',
        status: 200,
        data: {name, email, token}
    })
}
module.exports = refresh