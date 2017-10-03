import { action, computed, observable, ObservableMap } from 'mobx';
import { v4 as uuidv4 } from 'uuid';
import { ITodo, Todo } from '../models/Todo';

export class TodoStore {
    @observable _filter: 'ALL' | 'ACTIVE' | 'COMPLETED';
    @observable loading: boolean;
    @observable _todos: ObservableMap<Todo>;

    constructor() {
        this._filter = 'ALL';
        this.loading = false;
        this._todos = observable.map<Todo>();
    }

    @computed
    get activeCount(): number {
        let count = 0;
        this._todos.forEach(todo => {
            if (!todo.completed) count++;
        });

        return count;
    }

    @computed
    get completedCount(): number {
        let count = 0;
        this._todos.forEach(todo => {
            if (todo.completed) count++;
        });

        return count;
    }

    @computed
    get isEmpty(): boolean {
        return this._todos.size <= 0;
    }

    @computed
    get todos(): Todo[] {
        switch (this._filter) {
            case 'ACTIVE':
                return this._todos.values().filter(todo => !todo.completed);

            case 'COMPLETED':
                return this._todos.values().filter(todo => todo.completed);

            default:
                return this._todos.values();
        }
    }

    @action
    add(message: string): Todo {
        const id = uuidv4();
        const todo = new Todo(id, message);
        this._todos.set(todo.id, todo);

        return todo;
    }

    @action
    clearCompleted(): void {
        this._todos.forEach(todo => {
            if (todo.completed) {
                this.remove(todo.id);
            }
        });
    }

    @action
    filterBy(filter: 'ALL' | 'ACTIVE' | 'COMPLETED') {
        this._filter = filter;
    }

    get(id: string): ITodo {
        return this._todos.get(id);
    }

    @action
    populate(todos: ITodo[]): void {
        todos.forEach(todoProps => {
            const todo = new Todo(todoProps.id, todoProps.message);
            this._todos.set(todo.id, todo);
        });
    }

    @action
    remove(id: string): void {
        this._todos.delete(id);
    }

    @action
    toggleAll(): void {
        this._todos.forEach(todo => {
            todo.toggle();
        });
    }
}
