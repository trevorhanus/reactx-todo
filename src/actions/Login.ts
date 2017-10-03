import { Action } from '@trevorhanus/actions';
import { router } from '@trevorhanus/reactx-router';
import { action } from 'mobx';
import { Store } from '../stores/Store';

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
        const pause = 1500;
        setTimeout(() => {
            store.loggedIn = true;
            router.goTo('todos');
        }, pause);
    }
}
