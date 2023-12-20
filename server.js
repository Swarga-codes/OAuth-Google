const express=require('express')
const app=express()
const bcrypt=require('bcrypt')
app.set('view-engine','ejs')
app.use(express.urlencoded({extended:false}))
const users=[]
app.get('/',(req,res)=>{
    res.render('home.ejs',{name:'Mark'})
})
app.get('/register',(req,res)=>{
    res.render('register.ejs')
})
app.get('/login',(req,res)=>{
    res.render('login.ejs')
})
app.post('/register',async(req,res)=>{
    try{
    const {name,email,password}=req.body
    const hashPass=await bcrypt.hash(password,10)
    users.push({
        id:Date.now().toString(),
        name,
        email,
        password:hashPass
    })
    console.log(users)
    return res.redirect('/login')
   
}
catch(error){
    return res.redirect('/register')
}
})
app.post('/login',(req,res)=>{
    
})
app.listen(3000)