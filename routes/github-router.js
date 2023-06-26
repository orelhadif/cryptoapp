const express =require('express');
const router = express.Router();


const auth= ('/auth',(req,res)=>{
    res.send('authenticate')
})

const callback= ('/callback',(req,res)=>{
    res.send('callback')
})


router.get('/auth', auth);
router.get('/callback',callback)

module.exports=router