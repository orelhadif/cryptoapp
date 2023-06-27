const Joi = require('joi');
const userSymbolValidator= Joi.object({
    symbol: Joi.string().min(3).max(6).required().alphanum().uppercase()
})

module.exports = {
    userSymbolValidator,
}