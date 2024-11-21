const express = require('express')
const app = express()

const mongoose = require('mongoose')
require('dotenv/config')

const filmsRoute = require('./routes/films')

app.use('/films',filmsRoute)

app.get('/', (req,res)=>{
    res.send('Homepage')
})

const MURL = 'mongodb+srv://<user>:<password>@cluster0.zrpvh.mongodb.net/<db name>?retryWrites=true&w=majority&appName=Cluster0'

// mongoose.connect(MURL).then(() => { console.log('Your mongoDB connector is on...')})
mongoose.connect(process.env.DB_CONNECTOR).then(() => { console.log('Your mongoDB connector is on...')})


app.listen(3000, ()=>{
    console.log('Your server is up and running...')
})
