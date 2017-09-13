import {Action} from '@trevorhanus/actions';
import {Store} from '../stores/Store';

export interface IClearCompletedParams {
}

export class ClearCompleted extends Action<Store, IClearCompletedParams> {
    name = 'CLEAR_COMPLETED';

    constructor(params: IClearCompletedParams) {
        super(params);
    }

    invoke(store: Store): void {
        store.todos.clearCompleted();
    }
}
