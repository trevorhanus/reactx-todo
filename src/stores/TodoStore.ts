import {action, computed, observable, ObservableMap} from 'mobx';
import {Todo, ITodo} from '../models/Todo';

export class TodoStore {
    @observable _todos: ObservableMap<Todo>;

    constructor() {
        this._todos = observable.map<Todo>();
    }

    @computed
    get todos(): Todo[] {
        return this._todos.values();
    }

    @action
    add(message: string): void {
        const id = this._todos.size.toString();
        const todo = new Todo(id, message);
        this._todos.set(todo.id, todo);
    }

    @action
    remove(id: string): void {
        this._todos.delete(id);
    }

    @action
    populate(todos: ITodo[]): void {
        todos.forEach(todoProps => {
            const todo = new Todo(todoProps.id, todoProps.message);
            this._todos.set(todo.id, todo);
        });
    }
}
