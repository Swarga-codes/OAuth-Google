const express=require('express')
const app=express()
const passportConfig=require('./config/passport-config')
const dotenv=require('dotenv').config()
const auth=require('./routes/auth')
const mongoose=require('mongoose')
const cookieSession=require('cookie-session')
const passport=require('passport')
const profileRouter=require('./routes/profile')

//set up a view engine
app.set('view-engine','ejs')
app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:[process.env.SESSION_SECRET_KEY],
}))
app.use(passport.initialize())
app.use(passport.session())
//Connect to mongodb
mongoose.connect(process.env.MONGO_DB_URI)
mongoose.connection.on('connected',()=>{
    console.log('Connected to mongodb')
})
app.use('/auth',auth)
app.use('/profile',profileRouter)

app.get('/',(req,res)=>{
    res.render('home.ejs',{user:req.user})
})
app.listen(3000,()=>{
    console.log('Server listening on port 3000')
})