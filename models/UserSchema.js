const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    createdOn: {type: Date},
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    roles:[String]
})

const User = model('User', userSchema)

module.exports = User