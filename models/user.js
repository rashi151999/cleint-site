const mongoose = require('mongoose');
const validator=require('validator')
const userSchema = new mongoose.Schema({
    email: {
        type:String,
        unique:true,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){   //using validator npm library to validate email
                throw new Error("Invalid Email")
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength:7
    },
    name: {
        type: String,
        required: true,
        trim:true,
    }
}, {
    timestamps: true
});


const User = mongoose.model('User', userSchema);

module.exports = User;