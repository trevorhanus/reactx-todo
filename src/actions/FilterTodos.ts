import { Action } from '@trevorhanus/actions';
import { Store } from '../stores/Store';

export interface IFilterTodosParams {
    filter: 'ALL' | 'ACTIVE' | 'COMPLETED';
}

export class FilterTodos extends Action<Store, IFilterTodosParams> {
    name = 'FILTER_TODOS';

    constructor(params: IFilterTodosParams) {
        super(params);
    }

    invoke(store: Store): void {
        const filter = this.params.filter.toUpperCase();
        store.todos.filterBy(filter as 'ALL' | 'ACTIVE' | 'COMPLETED');
    }
}
