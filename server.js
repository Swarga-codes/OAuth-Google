const express=require('express')
const passportConfig=require('./config/passport-config')
const app=express()
const dotenv=require('dotenv').config()
//set up a view engine
const auth=require('./routes/auth')
app.set('view-engine','ejs')
app.use('/auth',auth)
app.get('/',(req,res)=>{
    res.render('home.ejs')
})
app.listen(3000,()=>{
    console.log('Server listening on port 3000')
})