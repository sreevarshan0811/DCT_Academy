const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT =  3010
app.use(express.json())
const {checkSchema , validationResult} = require('express-validator')

app.listen(PORT,() => {
    console.log('server running on port',PORT)
})
app.get('/category',(req,res) =>{
    Category.find()     
        .then((categories) =>{
            res.json(categories)
        })
        .catch((err) => {
            res.json(err)
        })
})

// app.get('/category/:id',(req,res) => {
//     const id = req.params.id
//     Category.find()
//         .then((categories) =>{
//             const category = categories.find(category => category._id == id)
//             res.json(category)
//         })
//         .catch((err) =>{
//             res.status(404).json("NOT FOUND")
//         })
// })

//Validation Schema

const categoryValidationSchema = 
{
    title:
    {
        in:['body'],
        exists:{
            errorMessage:'Title is required'
        },
        notEmpty:{errorMessage:'title cannot be empty'},
        isLength:{options:{min:3 , max:20},errorMessage:'title should be between 3 to 20 characterslong'},
        trim: true
    },
    description:
    {
        in:['body'],
        exists:{
            errorMessage:'Description is required'
        },
        notEmpty:{errorMessage:'description cannot be empty'},
        isLength:{options:{min:3},errorMessage:'description should be between 3 to 20 characterslong'},
        trim: true
    },
    status:
    {
        in:['body'],
        exists:{
            errorMessage:'Status is required'
        },
        notEmpty:{errorMessage:'status cannot be empty'},
        isLength:{options:{min:3,max:20},errorMessage:'status should be between 3 to 20 characterslong'},
        trim: true
    },
    amount:
    {
        in:['body'],
        exists:{
            errorMessage:'Amount is required'
        },
        notEmpty:{errorMessage:'amount cannot be empty'},
        isLength:{options:{min:2},errorMessage:'amount should be min 1 characterslong'},
        trim: true
    }
}
const idValidationSchema = {
    id:{
        in:['params'],
        exists:{
            errorMessage:'id is required'
        },
        notEmpty:{errorMessage:'id cannot be empty'},
        isLength:{options:{min:3},errorMessage:'id should be min 3 character long'},
        trim: true
    }
}

const updateValidation = {
    title:
    {
        in:['body'],
        exists:{
            errorMessage:'Title is required'
        },
        notEmpty:{errorMessage:'title cannot be empty'},
        isLength:{options:{min:3 , max:20},errorMessage:'title should be between 3 to 20 characterslong'},
        trim: true
    },
    description:
    {
        in:['body'],
        exists:{
            errorMessage:'Description is required'
        },
        notEmpty:{errorMessage:'description cannot be empty'},
        isLength:{options:{min:3},errorMessage:'description should be between 3 to 20 characterslong'},
        trim: true
    },
    status:
    {
        in:['body'],
        exists:{
            errorMessage:'Status is required'
        },
        notEmpty:{errorMessage:'status cannot be empty'},
        isLength:{options:{min:3,max:20},errorMessage:'status should be between 3 to 20 characterslong'},
        trim: true
    },
    amount:
    {
        in:['body'],
        exists:{
            errorMessage:'Amount is required'
        },
        notEmpty:{errorMessage:'amount cannot be empty'},
        isLength:{options:{min:2},errorMessage:'amount should be min 1 characterslong'},
        trim: true
    },
    id:{
        in:['params'],
        exists:{
            errorMessage:'id is required'
        },
        notEmpty:{errorMessage:'id cannot be empty'},
        isLength:{options:{min:3},errorMessage:'id should be min 3 character long'},
        trim: true
    }
}

//Category Schema

const {Schema , model} =mongoose
const categorySchema = new Schema({
    title:
    {
        type: String , 
        required:true
    },
    description:
    {
        type:String , 
        required:true
    },
    status:
    {
        type:String , 
        required:true
    },
    amount:
    {
        type:Number,
        required:true
    }
    },
    {timestamps:true})

const Category = model('Category' , categorySchema)
app.post('/category',checkSchema(categoryValidationSchema),(req,res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()})
    }
    const body = req.body
    const categoryObj = new Category(body)
    categoryObj.save()
    .then((category) => {res.status(201).json(category)})
    .catch((err) => {res.status(400).json(err)})
})

app.put('/category/:id',checkSchema(updateValidation),(req,res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const id = req.params.id
    const body = req.body
    Category.findByIdAndUpdate(id,body)
    .then((category) => {
        if(!category){
            res.status(404).json({message:'Category not found'})
        }
        else
        {
            res.json({message:"Updated Successfully"})
        }
    })
    .catch((err) => {
        res.status(400).json(err)
})
})

app.delete('/category/:id',checkSchema(idValidationSchema),(req,res) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty())
    {
        res.status(404).json({errors:errors.array()})
    }
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

app.get('/category/:status',(req,res) => {
    const id = req.params.id
    let totalAmount = 0
    Category.find()
        .then((categories) =>{
            const category = categories.find(category => category._id == id)

            res.json(category.title)
        })
        .catch((err) =>{
            res.status(404).json("NOT FOUND")
        })
})
