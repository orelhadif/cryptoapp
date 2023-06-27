const express =require('express');
const inputValidator = require('../middlewares/input-validator');
const router = express.Router();
const { userSymbolValidator } = require('../controllers/users/validator')


const logout= ('/logout',(req,res)=>{
    res.send('logout')
})

const addSymbol= ('/addSymbol',(req,res)=>{
    res.send('add symbol')
})

const dashboard= ('/dashboard',(req,res)=>{
    res.send('existing user')
})

router.get('/dashboard',dashboard)

router.get('/logout',logout)

router.post('/addSymbol',inputValidator(userSymbolValidator),addSymbol)

module.exports = router