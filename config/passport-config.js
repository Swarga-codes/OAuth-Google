const passport=require('passport')
const GoogleStrategy=require('passport-google-oauth20')
require('dotenv').config()
//setup passport
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/redirect'
},(accessToken,refreshToken,profile,done)=>{

    //callback
    console.log('callback fired....')
    console.log(profile)
}))
