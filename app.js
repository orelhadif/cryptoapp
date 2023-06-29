const express= require('express');
const config=require('config')
const cookieParser=require('cookie-parser')
const session=require('express-session')
const app= express()
const port=config.get('app.port')
const host=config.get('app.host')

const  guestsRoute= require('./routes/guests-router')
const usersRoute= require('./routes/users-router')
const githubRoute= require('./routes/github-router')

const auth=require('./middlewares/auth')
const notFound=require('./middlewares/404')
const error=require('./middlewares/error')

app.use(express.urlencoded({extended: false}));

app.use(cookieParser());
app.use(session({
    // store: sessionStore,
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 365 * 5,
    },
  }));

app.use(auth.initialize());
app.use(auth.session());


app.use('/',guestsRoute);
app.use('/',usersRoute);
app.use('/github',githubRoute);

app.use(notFound)
app.use(error)

app.listen(port,host,()=>{
    console.log(`Server is running on http://${host}:${port}`)
})