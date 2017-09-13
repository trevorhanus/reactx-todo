import {Action} from '@trevorhanus/actions';
import {Store} from '../stores/Store';

export interface IToggleAllParams {
}

export class ToggleAll extends Action<Store, IToggleAllParams> {
    name = 'TOGGLE_ALL';

    constructor(params: IToggleAllParams) {
        super(params);
    }

    invoke(store: Store): void {
        store.todos.toggleAll();
    }
}
