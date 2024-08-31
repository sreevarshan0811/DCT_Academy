const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT =  3010
app.use(express.json())
mongoose.connect('mongodb://127.0.0.1:27017/expense-app-july24')
.then(() => {
    console.log('Connected to db')
})
.catch((err) => {
    console.log('Error connecting to db',err)
})

app.listen(PORT,() => {
    console.log('server running on port',PORT)
})
const {Schema , model} =mongoose
const categorySchema = new Schema({name:{type: String , required:true}},{timestamps:true})
const Category = model('Category' , categorySchema)
app.post('/create-category',(req,res) => {
    const body = req.body
    const categoryObj = new Category(body)
    categoryObj.save()
    .then((category) => {res.status(201).json(category)})
    .catch((err) => {res.status(400).json(err)})
})
app.get('/list-category',(req,res) =>{
    Category.find()
        .then((categories) =>{
            res.json(categories)
        })
        .catch((err) => {
            res.json(err)
        })
})
app.delete('/delete-category/:id',(req,res) =>{
    const id = req.params.id
    Category.findByIdAndDelete(id)
    .then((category) =>{
        if(!category){
            res.status(404).json({message:'Category not found'})
        }
        else
        {
            res.json(category)
        }
        })
        .catch((err) => {
            res.status(400).json(err)
    })
})

