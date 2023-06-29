const express =require('express');
const inputValidator = require('../middlewares/input-validator');
const router = express.Router();
const {middleware:db}= require('../middlewares/mysql')
const { userSymbolValidator } = require('../controllers/users/validator')
const UserSymbol = require('../models/mysql/insert-symbol')

router.use(db)

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