const TaskModel = require('../model/Task.model')

class TodoController {

    getAllData(req, res) {
        return res.send(TaskModel.getAllData())
    }
}

module.exports = TodoController;