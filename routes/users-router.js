const express =require('express');
const router = express.Router();


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

router.get('/addSymbol',addSymbol)

module.exports = router