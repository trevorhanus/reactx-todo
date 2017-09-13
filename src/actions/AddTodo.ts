import {ReversibleAction} from '@trevorhanus/actions';
import {Store} from '../stores/Store';
import {Todo} from '../models/Todo';

export interface IAddTodoParams {
    message: string;
}

export class AddTodo extends ReversibleAction<Store, IAddTodoParams> {
    name = 'ADD_TODO';
    private _params: IAddTodoParams;
    private _addedTodoId: string;

    constructor(params: IAddTodoParams) {
        super();
        this._params = params;
    }

    invoke(store: Store): void {
        const todo = store.todos.add(this._params.message);
        this._addedTodoId = todo.id;
    }

    undo(store: Store): void {
        store.todos.remove(this._addedTodoId);
    }

    redo(store: Store): void {
        this.invoke(store);
    }
}
