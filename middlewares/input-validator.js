const httpErrors=require('http-errors')

module.exports = (validator) => async (req, res, next) => {
    try {
        req.body = await validator.validateAsync(req.body);
        next();
    } catch (err) {
        next(httpErrors(422, {message: err}))
    }
}