import { Action } from '@trevorhanus/actions';
import { Store } from '../stores/Store';

export interface IDeleteTodoParams {
    id: string;
}

export class DeleteTodo extends Action<Store, IDeleteTodoParams> {
    name = 'DELETE_TODO';

    constructor(params: IDeleteTodoParams) {
        super(params);
    }

    invoke(store: Store): void {
        console.log(`Removing todo with id: ${this.params.id}`);
        store.todos.remove(this.params.id);
    }
}
