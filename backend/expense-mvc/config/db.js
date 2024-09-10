const mongoose = require('mongoose')
const configureDb = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/expense-app-july24')
.then(() => {
    console.log('Connected to db')
})
.catch((err) => {
    console.log('Error connecting to db',err)
})
}
module.exports = configureDb