const express = require('express');
const app = express();

const TodoController = require('./controller/task.controller.js');
// const TaskModel = require('./model/task.model.js'); 


app.get('/data', (req,res) => {
    res.header({"Access-Control-Allow-Origin":"*"})
    res.json({'message':'Jai Shree Ram'})
})

app.get('/todo', (req,res) => {
    res.send(TaskModel.getAllData())
})

const todoController = new TodoController()

app.get('/',todoController.getAllData)

app.listen(8000, (err) => {
    if(err){
        console.log("SORRY")
    }
    console.log("listening :) ")
})