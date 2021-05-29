const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please enter you name.'],
        trim:true
    },
    email:{
        type:String,
        required:[true, 'Please enter your email id.'],
        unique:[true,'A account with this email id already exist'],
        validate:[validator.isEmail,'Please provide a valid email id']
    },
    phone:{
        type:String,
        required:[true,'Please provide your phone number'],
        unique:[true,'A account with this phone number already exist'],
        validate:validator.isNumeric,
        trim:true
    },
    password:{
        type:String,
        required:[true,'Please provide a password'],
        select:false
    },
    city:{
        type:String,
        default:''
    },
    profilePic:{
        type:String,
        default:'path to default profile pic'
    },
    age:{
        type:Number,
        default:-1
    },
    profession:{
        type:String,
        default:''
    },
    about:{
        type:String,
        default:''
    }
})

mongoose.model("User",userSchema)