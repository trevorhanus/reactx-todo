import { ReversibleAction } from '@trevorhanus/actions';
import { action } from 'mobx';
import { ITodo } from '../models/Todo';
import { Store } from '../stores/Store';

export interface IUpdateTodoProps {
    todoId: string;
    newMessage: string;
}

export class UpdateTodo extends ReversibleAction<Store, IUpdateTodoProps> {
    name = 'UPDATE_TODO';
    private _oldMessage: string;

    constructor(params: IUpdateTodoProps) {
        super(params);
    }

    @action
    invoke(store: Store): void {
        const {todoId, newMessage} = this.params;
        const todo: ITodo = store.todos.get(todoId);
        this._oldMessage = todo.message;
        todo.setMessage(newMessage);
    }

    undo(store: Store): void {
        const {todoId} = this.params;
        const todo = store.todos.get(todoId);
        todo.setMessage(this._oldMessage);
    }

    redo(store: Store): void {
        this.invoke(store);
    }
}
