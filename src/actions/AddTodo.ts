import {Action} from '@trevorhanus/reactx';
import {Store} from '../stores/Store';

export interface IAddTodoParams {
    message: string;
}

export class AddTodo extends Action<Store, IAddTodoParams> {
    name = 'ADD_TODO';

    constructor(params: IAddTodoParams) {
        super(params);
    }

    invoke(store: Store): void {
        console.log('adding todo!');
    }
}
