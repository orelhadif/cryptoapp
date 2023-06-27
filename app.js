const express= require('express');
const app= express()
const port=3001;
const host='localhost'

const  guestsRoute= require('./routes/guests-router')
const usersRoute= require('./routes/users-router')
const githubRoute= require('./routes/github-router')


const notFound=require('./middlewares/404')
const error=require('./middlewares/error')

app.use(express.urlencoded({extended: false}));
app.use('/',guestsRoute);
app.use('/',usersRoute);
app.use('/github',githubRoute);

app.use(notFound)
app.use(error)

app.listen(port,host,()=>{
    console.log(`Server is running on http://${host}:${port}`)
})