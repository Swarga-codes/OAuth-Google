const router=require('express').Router()
const passport=require('passport')
router.get('/login',(req,res)=>{
    res.render('login.ejs')
})


//login with google

router.get('/google',passport.authenticate('google',{
    scope:['profile']
}))

//callback uri

router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.send(req.user)
})

//logout
router.get('/logout',(req,res)=>{
    res.send('logging out...')
})


module.exports=router