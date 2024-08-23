const express = require('express')
const port = 3050 
const app = express()
const employees = [ { "id": 1, "name": "John Doe", "position": "Software Engineer" },
    { "id": 2, "name": "Jane Smith", "position": "Product Manager" },
    { "id": 3, "name": "Mike Johnson", "position": "UX Designer" }]

//app.httpMethod(url,fn)
app.get('/list-employees', (req,res)=>{
    res.json(employees)
})

app.get('/single-employee/:id',(req,res) =>{
    const id = req.params.id
    const employee = employees.find(ele => ele.id ==id)
    if(employee)
    {
        res.json(employee)
    }
    else{
        res.status(404).json("No employee id")
    }
})

app.get('/client-id/:cid',(req,res) =>{
    const id = req.params.cid
    const clientId = employees.find(ele => ele.id == id)
    if(clientId){
        res.json(clientId)
    }
    else{
        res.status(404).json('Employee id not found')
    }
})

app.listen(port, () => {
    console.log('express server is running on port', port)
})