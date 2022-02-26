const bcrypt = require('bcrypt')
const User = require('../models/UserSchema')
const auth = require('../middleware/auth')

exports.registerUser = async (req,res) =>{
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password,salt)
    const user = new User()
   
   
    try {
    
        user.firstname = req.body.firstname
        user.lastname = req.body.lastname
        user.email = req.body.email
        user.password = hashedPassword

        // const roles = req.body.roles.split(',')

        // roles.forEach((roles) =>{
        //     user.roles.push(role)
        // })

        const existingUser = await User.find({email:req.body.email})
        console.log(existingUser, 'user we want')
        if(existingUser.length > 0){
            throw 'User already exists'
        }

        await user.save()
        return res.status(200).json({message:'user has been created', user})
    } catch (error) {
        return res.status(400).json({message: 'there has been an issue creating new user', error})
    }
}

exports.login = async ( req,res) =>{
    const user = await User.findOne({email:req.body.email})

    try {
        if (user === null){
            return res.status(404).json({message: 'User with that email was not found'})
        }

        const checkPassword = await bcrypt.compare(req.body.password, user.password)

        if(checkPassword){
            const token = await auth.generateToken(user)

            //protect from client side script
            return res.status(200).cookie('jwt', token,{
                httpOnly:true,
                secure:false,
                sameSite:'lax'
            }).send('user login successful')
        } else{
            return res.status(400).json({message: 'Password is not matching'})
        }
    } catch (error) {
        return res.status(400).json({message: 'general error signing in', error})
    }

}

exports.logout = async (req,res) =>{
    return await res.clearCookie('jwt', {
        httpOnly:true,
        secure:false,
        sameSite:'lax'
    }).json({message: 'Logout Successful'})
}