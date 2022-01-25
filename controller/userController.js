const bcrypt = require('bcrypt')
const User = require('../models/UserSchema')

exports.registerUser = async (req,res) =>{
    const hashedPassword = await bcrypt.hash(req.body.password,10)
    const user = User.create()
    try {
        user.firstname = req.body.firstname
        user.lastname = req.body.lastname
        user.email = req.body.email
        user.password = hashedPassword

        const existingUser = User.find({username:req.body.username})

        if(existingUser){
            throw 'User already exists'
        }

        await user.save()
        return res.status(200).json({message:'user has been created', user})
    } catch (error) {
        return res.status(400).json({message: 'there has been an issue creating new user', error})
    }
}
