const Expense = require('../models/expense-model')
const {validationResult} = require('express-validator')
const expensesCltr = {}


// to display all expenses
expensesCltr.list = async (req,res) =>{
    try{
        const expenses = await Expense.find()
        res.json(expenses)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'Something went wrong....!'})
    }
    // Expense.find()     
    //     .then((categories) =>{
    //         res.json(categories)
    //     })
    //     .catch((err) => {
    //         res.json(err)
    //     })
    }


// to show a single expense using id
    expensesCltr.show = async (req,res) =>{
        const errors = validationResult(req)
        if(!errors.isEmpty())
        {
            res.status(404).json({errors:errors.array()})
        }
        const id = req.params.id
        try{
            const expenses= await Expense.findById(id)
            res.json(expenses)
        }
        catch(err){
            console.log(err)
            res.status(404).json({error:'Record not found....!'})
        }
    }

// to display total expense
    expensesCltr.total = async (req,res) =>{
        try
        {
            let total =0
            const expenses = await Expense.find()
            for(let i =0 ; i<expenses.length ; i++){
                total += expenses[i].amount
            }
            res.json(total)
        }
        catch(err){
            console.log(err)
            res.status(500).json({error:'Something went wrong....!'})
        }
        }


// to create an expense
    expensesCltr.create = (req,res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty())
        {
            return res.status(400).json({errors:errors.array()})
        }
        const body = req.body
        const expenseObj = new Expense(body)
        expenseObj.save()
        .then((expense) => {
            res.status(201).json(expense)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    }


// to update an expense
    expensesCltr.update = async (req,res) =>{
        const errors = validationResult(req)
        if(!errors.isEmpty())
        {
            res.status(404).json({errors:errors.array()})
        }
        try{
            const id = req.params.id
            const body = req.body
            const expenses = await Expense.findByIdAndUpdate(id,body)
            if(!expenses){
                res.status(404).json({error:'Expense not found...!'})
            }
            else{
    
                res.json({message:'Expense Updated...!'})
            }
        }
        catch(err){
            console.log(err)
            res.status(400).json({error:'Expense not updated...!'})
        }
    }


// to delete an expense
    expensesCltr.delete = async (req,res) =>{
        const errors = validationResult(req)
        if(!errors.isEmpty())
        {
            res.status(404).json({errors:errors.array()})
        }
        try{
            const id = req.params.id
            const expenses = await Expense.findByIdAndDelete(id)
            if(!expenses){
                res.status(404).json({error:'Expense not found...!'})
            }
            else{
                res.json({message:'Expense deleted...!'})
            }
        }
        catch(err){
            console.log(err)
            res.status(400).json({error:'Expense not deleted...!'})
        }
    }


module.exports = expensesCltr