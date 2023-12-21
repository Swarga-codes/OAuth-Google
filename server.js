const express=require('express')
const app=express()
const passportConfig=require('./config/passport-config')
const dotenv=require('dotenv').config()
const auth=require('./routes/auth')
const mongoose=require('mongoose')
//Connect to mongodb
mongoose.connect(process.env.MONGO_DB_URI)
mongoose.connection.on('connected',()=>{
    console.log('Connected to mongodb')
})
//set up a view engine
app.set('view-engine','ejs')
app.use('/auth',auth)
app.get('/',(req,res)=>{
    res.render('home.ejs')
})
app.listen(3000,()=>{
    console.log('Server listening on port 3000')
})