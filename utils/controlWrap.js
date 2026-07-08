const controlWrap = (control) => {
    return async (req, res, next) => {
        try{
            await control(req, res, next)
        } catch(error) {
            next
        }
    }
}
module.exports = controlWrap