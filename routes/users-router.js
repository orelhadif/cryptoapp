const express =require('express');
const inputValidator = require('../middlewares/input-validator');
const router = express.Router();
const mysql= require('../middlewares/mysql')
const { userSymbolValidator } = require('../controllers/users/validator')
const UserSymbol = require('../models/insert-symbol')

router.use(mysql)

const logout= ('/logout',(req,res)=>{
    res.send('logout')
})

const addSymbol= ('/addSymbol',async (req,res, next)=>{
    const userSymbol = new UserSymbol(req.pool);
    await userSymbol.add(123, req.body.symbol);
    res.send('add symbol')
})

const dashboard= ('/dashboard',(req,res)=>{
    res.send('existing user')
})

router.get('/dashboard',dashboard)

router.get('/logout',logout)

router.post('/addSymbol',inputValidator(userSymbolValidator),addSymbol)

module.exports = router