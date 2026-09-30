const addCategories = async (req, res) => {
    const { body, file } = req

    console.log('body:', body)
    console.log('file:', file)

    if (file) {
        const { avatarUrl } = await claudinaryImgUpload(req)
        body.avatarUrl = avatarUrl
    } else {
        body.avatarUrl = body.avatar
    }

    console.log('body:', body)
}