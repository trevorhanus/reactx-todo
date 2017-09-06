import {TodoStore} from './TodoStore';

export class Store {
    todos: TodoStore;

    constructor() {
        this.todos = new TodoStore();
    }
}
