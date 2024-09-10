const mongoose = require('mongoose')
const {Schema , model} =mongoose
const expenseSchema = new Schema({
    expenseDate:
    {
        type: Date , 
        required:true
    },
    amount:
    {
        type: Number , 
        required:true
    },
    category:
    {
        type: Schema.Types.ObjectId,
        required:true,
        ref:'Category'
    }
    },
    {timestamps:true})

const Expense = model('Expense' , expenseSchema)
module.exports = Expense