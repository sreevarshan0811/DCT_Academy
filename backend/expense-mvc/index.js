const express = require('express')
const app = express()
const cors = require('cors')
const port = 3030
const configureDb = require('./config/db')
const {checkSchema , validationResult} = require('express-validator')
const idValidationSchema = require('./app/validators/id-schema-validation')
const categoriesCltr = require('./app/controllers/categories-cltr')
const expensesCltr = require('./app/controllers/expenses-cltr')
configureDb()
app.use(express.json())
app.use(cors())


//Categories API

app.get('/categories', categoriesCltr.list) // --->  all categories

app.get('/categories-only-names', categoriesCltr.names) // ---> only category names

app.get('/categories/:id',checkSchema(idValidationSchema),categoriesCltr.show) // ---> single category by id

app.post('/categories', categoriesCltr.create) // ---> create a new category

app.put('/categories/:id',categoriesCltr.update) // ---> update a category

app.delete('/categories/:id' ,checkSchema(idValidationSchema), categoriesCltr.delete) // ---> delete a category



//Expenses API

app.get('/expenses', expensesCltr.list)// ---> all expenses

app.get('/expenses/:id', expensesCltr.show) // ---> single expense
 
app.get('/expenses-total', expensesCltr.total) // ---> total expense

app.post('/expenses', expensesCltr.create) // ---> create new expense

app.put('/expenses/:id', expensesCltr.update) // ---> update an expense

app.delete('/expenses/:id', expensesCltr.delete) // ---> delete an expense


app.listen(port, () => {
    console.log('express server is running on port', port)
})
