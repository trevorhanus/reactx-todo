import {Action} from '@trevorhanus/actions';
import {action} from 'mobx';
import {router} from '@trevorhanus/reactx';
import {Store} from '../stores/Store';
import {Todo} from '../models/Todo';

export interface ILoginParams {
    username: string;
    password: string;
}

export class Login extends Action<Store, ILoginParams> {
    name = 'LOGIN';

    constructor(params: ILoginParams) {
        super(params);
    }

    @action
    invoke(store: Store): void {
        const {username, password} = this.params;
        console.log(`logging in with ${username}:${password}`);
        // simulate a callout
        setTimeout(() => {
            store.loggedIn = true;
            router.goTo('todos');
        }, 1500);
    }
}
