const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT =  3010
mongoose.connect('mongodb://127.0.0.1:27017/expense-app-july24')
.then(() => {
    console.log('connected to db')
})
.catch((err) => {
    console.log('error connecting to db',err)
})

app.listen(PORT,() => {
    console.log('server running on port',PORT)
})