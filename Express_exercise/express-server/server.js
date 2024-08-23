const express = require('express')
const port = 3050 
const app = express()
const tasks = [
    { id: 1, title: "Setup Project", description: "Initialize the project structure", status: "completed" }, 
    { id: 2, title: "Install Dependencies", description: "Install necessary npm packages", status: "completed" },
    { id: 3, title: "Setup Express Server", description: "Create and configure Express server", status: "in-progress" }, 
    { id: 4, title: "Create Task Model", description: "Define the task data structure", status: "in-progress" },
    { id: 5, title: "Implement Task API", description: "Develop the API endpoints for tasks", status: "pending" },
    { id: 6, title: "Write Unit Tests", description: "Create unit tests for the API", status: "pending" },
    { id: 7, title: "Setup Error Handling", description: "Implement error handling in the server", status: "pending" },
    { id: 8, title: "Document API", description: "Write documentation for the API endpoints", status: "pending" },
    { id: 9, title: "Setup Linter", description: "Configure ESLint for code quality", status: "completed" },
    { id: 10, title: "Deploy Server", description: "Deploy the server to a cloud provider", status: "pending" } 
]

//Displays whole task details
app.get('/tasks-details', (req,res)=>{
    res.json(tasks)
})
app.listen(port, () => {
    console.log('express server is running on port', port)
})


//Displays all tasks
app.get('/tasks',(req,res) =>{
    let alltasks = []
    for(let i=0 ; i<tasks.length ; i++)
    {
        alltasks.push(tasks[i].title)
    }
    res.json('All tasks : '+alltasks)
})


//Displays tasks of given ID
app.get('/tasks/:id',(req,res) => {
    const id = req.params.id
    const task = tasks.find(task => task.id == id)
    if(task){
        res.json('task of id:'+ id + ' - '+task.title)
    }
    else{
        res.status(404).json("Task not found")
    }
})


//Displays tasks based on the status
app.get('/tasks/status/:status',(req,res) =>{
    let taskStatus = []
    const taskstatus = req.params.status
    for(let i=0 ; i<tasks.length ; i++)
    {
        if(taskstatus == tasks[i].status)
        {
            taskStatus.push(tasks[i].title)
        }
        else{
            continue
        }
    }
    res.json('Tasks '+taskstatus+' - '+taskStatus)
})