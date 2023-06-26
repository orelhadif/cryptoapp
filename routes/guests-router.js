const express =require('express');
const router = express.Router();



const welcome= ('/welcome',(req,res)=>{
    res.send('welcome guest')
})

router.get('/welcome',welcome)

module.exports= router

