const passport=require('passport')
const GoogleStrategy=require('passport-google-oauth20')
const USER=require('../models/userModel')
require('dotenv').config()

//serialise and deserialize
passport.serializeUser((user,done)=>{
    done(null,user.id)
})
passport.deserializeUser((id,done)=>{
    USER.findById(id)
    .then(userData=>done(null,userData))
})
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
done(null,savedUser)
}
else{
    new USER({
        userName:profile.displayName,
        googleId:profile.id,
        thumbnail:profile.photos[0].value
    }).save().then(payload=>{
        console.log('User created successfully: '+payload)
    done(null,payload)
    })
}
    })
  
}))
