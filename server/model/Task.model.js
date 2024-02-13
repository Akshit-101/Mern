class TaskModel {
    constructor(id, todo, status){
        this.id = id
        this.todo = todo
        this.status = status
    }

    static getAllData() {
        return todos;
    }

    static addTodo(id, todo, status) {
        const newTodo = new TaskModel(id, todo, status)
        todos.push(newTodo)
    }
}

const todos = [
    new TaskModel(1, 'GYM', 'Not done'),
    new TaskModel(2, 'CODING', 'Done')
]

module.exports = TaskModel;

// console.log(TaskModel.getAllData());