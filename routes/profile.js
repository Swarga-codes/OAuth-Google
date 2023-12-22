const router=require('express').Router()


const authorizeUser=(req,res,next)=>{
    if(!req.user){
        res.redirect('/auth/login')
    }
    else{
        next()
    }
}

router.get('/',authorizeUser,(req,res)=>{
    res.render('profile.ejs',{user:req.user})
})

module.exports=router
