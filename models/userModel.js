const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    userName:{
        type:String
    },
    googleId:{
        type:String
    }
})

const USER=mongoose.model('USER',userSchema)

module.exports=USER