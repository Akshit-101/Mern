class TaskModel {
    constructor(id, todo, status){
        this.id = id
        this.todo = todo
        this.status = status
    }

    static getAllData() {
        return todos;
    }
}

const todos = [
    new TaskModel('1', 'GYM', 'Not done'),
    new TaskModel('2', 'CODING', 'Done')
]

module.exports = TaskModel;

// console.log(TaskModel.getAllData());