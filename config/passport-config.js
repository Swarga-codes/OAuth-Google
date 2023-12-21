const passport=require('passport')
const GoogleStrategy=require('passport-google-oauth20')
const USER=require('../models/userModel')
require('dotenv').config()
//setup passport
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/redirect'
},(accessToken,refreshToken,profile,done)=>{

    //callback
    USER.findOne({googleId:profile.id})
    .then((savedUser)=>{
if(savedUser){
console.log('user is: '+savedUser)
}
else{
    new USER({
        userName:profile.displayName,
        googleId:profile.id
    }).save().then(payload=>console.log('User created successfully: '+payload))
}
    })
    .catch(err=>console.log(err))
}))
