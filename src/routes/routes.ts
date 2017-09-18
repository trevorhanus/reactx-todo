import { IViewState, Route } from '@trevorhanus/reactx';
import { fetchTodos, filterTodos } from '../actions';
import { TodoApp } from '../components/App';
import { Auth } from '../components/Auth';
import { TodoList } from '../components/TodoList';
import { UsersList } from '../components/UsersList';
import { Store } from '../stores/Store';

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
            beforeEnter: () => {
                fetchTodos();
            },
            onEnter: (state: IViewState) => {
                const { query } = state;
                if (query.filter !== null && query.filter !== undefined) {
                    filterTodos(query.filter);
                }
            },
        }),
        new Route({
            name: 'users',
            path: '/users',
            component: UsersList,
        }),
    ],
});

const login = new Route({
    name: 'login',
    path: '/login',
    component: Auth,
});

export const routes = [app, login];
