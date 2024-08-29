const express = require('express')
// const cors = require("cors")
const port = 3050 
const app = express()
// app.use(express.json())

// const corsOptions = {
//     origin: "*", //access from anywhere, should be declared b4 app.get
//     // origin: "", 
// }

// app.use(cors(corsOptions));

const employees = [ { "id": 1, "name": "John Doe", "position": "Software Engineer" },
    { "id": 2, "name": "Jane Smith", "position": "Product Manager" },
    { "id": 3, "name": "Mike Johnson", "position": "UX-Designer" }]

//app.httpMethod(url,fn)
app.get('/list-employees', (req,res)=>{
    res.json(employees)
})

// app.get('/single-employee/:id',(req,res) =>{
//     const id = req.params.id
//     const employee = employees.find(ele => ele.id ==id)
//     if(employee)
//     {
//         res.json(employee)
//     }
//     else{
//         res.status(404).json("No employee id")
//     }
// })



 //
// app.post('/create-employee',(req,res) => {
//     const body = req.body
//     employees.push(body)
//     body.id = Number(new Date())
//     res.json(body)
// })


// app.put('/update-employee/:id',(req,res) => {
//     const id = req.params.id
//     const body = req.body
//     const employee = employees.find(ele => ele.id == Number(id))
//     if(employee)
//     {
//         Object.assign(employee,body)
//         res.json(employee)
//     }
//     else{
//         res.status(404).json({message : 'record not found'})
//     }    
// })

// // app.post('/create-emp',(req,res) => {
// //     const body = req.body
// //     employees.push(body)
// //     res.json(body)
// // })

// app.get('/my-clients',(req,res) => {
//     res.json(clients)
// })

// app.delete('/delete-emp/:id',(req,res) =>
//      {
//     const id = req.params.id
//     const index = employees.findIndex((ele) => 
//     {
//         return ele.id === Number(id)
//     })
//     if(index >=0)
//         {
//             const result = employees.splice(index,1)
//             res.json(result[0]) 
//         }
//         else{
//             res.status(404).json("No employee id")
//         }
// })

// app.put('/update-emp/:id',(req,res) => {
//     const id = req.params.id
//     const body = req.body
//     const employee = employees.find(ele => ele.id == Number(id))
//     if(employee)
//     {
//         Object.assign(employee,body)
//         res.json(employee)
//     }
//     else{
//         res.status(404).json({message : 'record not found'})
//     }
// })
app.listen(port, () => {
    console.log('express server is running on port', port)
})