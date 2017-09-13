import {Auth} from '../components/Auth';
import {filterTodos} from '../actions';
import {Route, router, IViewState} from '@trevorhanus/reactx';
import {Store} from '../stores/Store';
import {TodoApp} from '../components/App';
import {TodoList} from '../components/TodoList';

const app = new Route({
    name: 'app',
    path: '/',
    component: TodoApp,
    // verify that the user is logged in 
    // before we show any route nested under the 'app' route
    beforeEnter: (state: IViewState, store: Store) => { 
        // if (!store.loggedIn) {
        //     router.goTo('login');
        //     return false;
        // }
    },
    children: [
        new Route({
            name: 'todos',
            path: '/',
            component: TodoList,
            acceptedQueryParams: ['filter'],
            onEnter: (state) => {
                const {query} = state;
                if (query.filter !== null && query.filter !== undefined) {
                    filterTodos(query.filter);
                }
            }
        })
    ]
});

const login = new Route({
    name: 'login',
    path: '/login',
    component: Auth
});

const routes = [app, login];

export {
    routes
}
