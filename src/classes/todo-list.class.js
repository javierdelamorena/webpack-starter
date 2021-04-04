export class TodoList {


    constructor() {

        this.todos = [];
    }

    nuevoTodo(todo) {
        this.todos.push(todo);

    }
    eliminarTodo(id) {

        this.pop(id);

    }
    marcarCompeltado(id) {

    }
    eliminarCompletados() {


    }

}