const express = require('express')
const mongoose = require('mongoose')
const App = express()
const PORT = 3000
const {MONGOURI} = require('./keys')

require('../models/user')



mongoose.connect(MONGOURI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.connection.on('connected',()=>{
  console.log("database connected successfully")
})

mongoose.connection.on('error',(err)=>{
  console.log("err in connecting:",err)
})

const middleWare = (req,res,next)=>{
  console.log("middleWare is executed!!")
  next()
}

App.use(express.json())
App.use(require('../routes/signup'))

App.get('/',middleWare,(req,res)=>{
  res.send("hello world")
})

App.get('/about',(req,res)=>{
  res.send("This is about page")
})

App.listen(PORT,()=>{
  console.log("server is running on the port:",PORT)
})

