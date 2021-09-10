//preconfig, requieres, and stuff
require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//database connection
const mongoose = require('mongoose')
const uri=`m○mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.z7ncs.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
const connectConfigObject = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(uri,connectConfigObject)
mongoose.connection.once('open', ()=>{console.log("Connected to database and ready to work!")})

//Task API
app.use('/tasks', require('./api/tasksApi'))

//cors issues solution?
const whitelist = ['http://localhost:3000', 'http://localhost:8080', 'https://shrouded-journey-38552.heroku...']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))

//things to make it work on heroku
const path = require('path');
if (process.env.NODE_ENV === 'production') {
   app.use(express.static('build'))
   app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, 'build', 'index.html'))
   })
}

//host connection
const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log("Server is working at: ", PORT)
})