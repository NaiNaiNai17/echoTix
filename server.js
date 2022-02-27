const express = require('express')
const axios = require('axios')
const mongoose = require('mongoose')
const cors = require('cors')
const passport = require('passport')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const userRoutes = require('./routes/userRoutes')
const ticketRoutes = require('./routes/ticketRoutes')
const basketRoutes = require('./routes/basketRoutes')
const path = require('path')

require('dotenv').config()

const app = express()
app.use(cors({
   credentials: true,
   origin:true,
}))
const PORT = process.env.PORT || 8080
app.set('port', PORT )
app.use(logger('dev'));
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(passport.initialize())

app.use(cookieParser())

 //Passport config
const initializePassport = require('./config/jwt-passport-config')
initializePassport(passport)


mongoose.connect(process.env.MONGODB_URI ||`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
,{
   useNewUrlParser:true, 
   useUnifiedTopology:true,
})
.then(() => {console.log('we are connected to the database.')})
.catch((error) => { console.log('an error occurred while connecting to the db', error)})







app.use('/user',userRoutes)
app.use('/shows',ticketRoutes)
app.use('/tickets', basketRoutes)


app.listen(PORT, console.log(`server is running on ${PORT}`) )


// if (process.env.NODE_ENV === 'production'){
//    // app.use(express.static('frontend/build'))

// app.use(express.static(path.join(__dirname, "./frontend/build/index.html")));
// }

//!For deployment - Do not add code below this line!
// Serve frontend client/build folder
app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./frontend/build", "index.html"));
});