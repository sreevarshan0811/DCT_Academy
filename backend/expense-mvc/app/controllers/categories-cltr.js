const Category = require('../models/category-model')
const {validationResult} = require('express-validator')
const categoriesCltr = {}

// to display all categories
categoriesCltr.list = async (req,res) =>
    {
        try{
            const categories = await Category.find()
            res.json(categories)
        }
        catch(err){
            console.log(err)
            res.status(500).json({error:'Something went wrong....!'})
        }

    }


// to display only names of all categories
    categoriesCltr.names = async (req,res) =>{
        try
        {
            let names = []
            const categories = await Category.find()
            for(let i =0 ; i<categories.length ; i++){
                names.push(categories[i].name)
            }
            res.json(names)
        }
        catch(err){
            console.log(err)
            res.status(500).json({error:'Something went wrong....!'})
        }
    }


// to show a single category using id
categoriesCltr.show = async (req,res) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty())
    {
        res.status(404).json({errors:errors.array()})
    }
    const id = req.params.id
    try{
        const categories = await Category.findById(id)
        res.json(categories)
    }
    catch(err){
        console.log(err)
        res.status(404).json({error:'Record not found....!'})
    }
    // Category.findByIdAndDelete(id)
    // .then((category) =>{
    //     if(!category){
    //         res.status(404).json({message:'Category not found'})
    //     }
    //     else
    //     {
    //         res.json(category)
    //     }
    //     })
    //     .catch((err) => {
    //         res.status(400).json(err)
    // })
}


//to create a new category
categoriesCltr.create = async (req,res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()})
    }
    try{
        const body = req.body
        const category = await new Category(body)
        category.save()
        res.json(category)
    }
    catch(err){
        console.log(err)
        res.status(400).json('Category not created...!')
    }
    // const body = req.body
    // const categoryObj = new Category(body)
    // categoryObj.save()
    // .then((category) => {
    //     res.status(201).json(category)
    // })
    // .catch((err) => {
    //     res.status(400).json(err)
    // })
}


// to delete a category using id
categoriesCltr.delete = async (req,res) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty())
    {
        res.status(404).json({errors:errors.array()})
    }
    try{
        const id = req.params.id
        const categories = await Category.findByIdAndDelete(id)
        if(!categories){
            res.status(404).json({error:'Category not found...!'})
        }
        else{
            res.json({message:'Category deleted...!'})
        }
    }
    catch(err){
        console.log(err)
        res.status(400).json({error:'Category not deleted...!'})
    }
    // const id = req.params.id
    // Category.findByIdAndDelete(id)
    // .then((category) =>{
    //     if(!category){
    //         res.status(404).json({message:'Category not found'})
    //     }
    //     else
    //     {
    //         res.json(category)
    //     }
    //     })
    //     .catch((err) => {
    //         res.status(400).json(err)
    // })
}


// to update a category using id
categoriesCltr.update = async (req,res) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty())
    {
        res.status(404).json({errors:errors.array()})
    }
    try{
        const id = req.params.id
        const body = req.body
        const categories = await Category.findByIdAndUpdate(id,body)
        if(!categories){
            res.status(404).json({error:'Category not found...!'})
        }
        else{

            res.json({message:'Category Updated...!'})
        }
    }
    catch(err){
        console.log(err)
        res.status(400).json({error:'Category not updated...!'})
    }
}

module.exports = categoriesCltr