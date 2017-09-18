import { Action } from '@trevorhanus/actions';
import { Store } from '../stores/Store';

export class FetchTodos extends Action<Store,any> {
    name = 'FETCH_TODOS';

    constructor() {
        super();
    }

    invoke(store: Store): void {
        store.todos.loading = true;
        const pause = 3000;
        setTimeout(() => {
            store.todos.populate([
                {id: '1', message: 'learn reactx'},
                {id: '2', message: 'conquer the World'},
            ] as any);
            store.todos.loading = false;
        }, pause);
    }
}
