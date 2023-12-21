const router=require('express').Router()

router.get('/login',(req,res)=>{
    res.render('login.ejs')
})


//login with google

router.get('/google',(req,res)=>{
    res.send('logging with google')
})


//logout
router.get('/logout',(req,res)=>{
    res.send('logging out...')
})

module.exports=router