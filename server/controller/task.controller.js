const TaskModel = require('../model/Task.model.js')

class TodoController {

    getAllData(req, res) {
        return res.send(TaskModel.getAllData())
    }

    addTodo(req, res) {
        const {id, todo, status} = req.body
        TaskModel.addTodo(id, todo, status)
        res.send(console.log('req stoped'))
    }
}

module.exports = TodoController;