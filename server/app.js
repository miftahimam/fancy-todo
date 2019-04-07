require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const port = 3000
const routes = require('./routes/task')
const userRoutes = require('./routes/user')



app.use(cors())
app.use(express.urlencoded({extended : false}))
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/hacktiv8-times', { useNewUrlParser: true })


app.use('/', routes)
app.use('/', userRoutes)



app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
    
})
