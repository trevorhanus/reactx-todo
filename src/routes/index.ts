import {filterTodos} from '../actions';
import {Route, router} from '@trevorhanus/reactx';
import {TodoApp} from '../components/App';
import {Auth} from '../components/Auth';
import {Store} from '../stores/Store';
import {TodoList} from '../components/TodoList';

const app = new Route({
    name: 'home',
    path: '/',
    component: TodoApp,
    acceptedQueryParams: ['active', 'completed'],
    children: [
        new Route({
            name: 'todos',
            path: '/',
            component: TodoList,
            beforeEnter: (state, store: Store) => {
                if (!store.loggedIn) {
                    router.goTo('login');
                    return false;
                }
            },
            onEnter: (state) => {
                const {query} = state;
                if (query.active) {
                    filterTodos('ACTIVE');
                } else if (query.completed) {
                    filterTodos('COMPLETED');
                } else {
                    filterTodos('ALL');
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
