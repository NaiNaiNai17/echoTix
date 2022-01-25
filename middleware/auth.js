const jwt = require('jsonwebtoken')


exports.generateToken = (user) =>{
    return new Promise((resolve, reject) =>{

        jwt.sign({sub:user._id}, process.env.JWT_SECRET, {expiresIn: '30m'}, (err,asyncToken) =>{
            if(err) {
                reject(err)
                return;
            }

            resolve(asyncToken)
        })
    })
}