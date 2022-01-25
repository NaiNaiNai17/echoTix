const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const User = require('../models/User')


module.exports = function(passport){
    passport.use(
        new GoogleStrategy(
            {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:3000/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) =>{
      const newUser = {
          googleId: profile.id,
          displayName: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          
      }
      try {
          let user = await User.findOne({ googleId: profile.id})

          if(user){
              done(null, user)
          } else {
              user = await User.create(newUser)
              done(null, user)
          }
      } catch (error) {
          console.log(error)
          
      }
    }
)
)
passport.serializeUser((user, done)=>{
   done(null, user.id)
})
passport.deserializeUser((id,done)=>{
    User.findById(id,(err, user) => done(err,user)
    )
})
}

app.get('/auth/google', 
  passport.authenticate('google', { scope : ['profile', 'email'] }));
 
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/error' }),
  function(req, res) {
    // Successful authentication, redirect success.
    res.redirect('/success');
  });