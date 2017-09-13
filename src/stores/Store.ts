import {Actions} from '@trevorhanus/actions';
import {observable} from 'mobx';
import {TodoStore} from './TodoStore';

export class Store {
    @observable loggedIn: boolean;
    todos: TodoStore;

    constructor() {
        // create the dispatcher instance and pass the store 
        // so it can be passed to the invoke method of our actions
        Actions.createDispatcher<Store>(this);
        this.loggedIn = false;
        this.todos = new TodoStore();
    }
}
