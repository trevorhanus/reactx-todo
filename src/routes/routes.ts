import { IViewState, Route } from '@trevorhanus/reactx-router';
import { fetchTodos, filterTodos } from '../actions';
import { TodoApp } from '../components/App';
import { Auth } from '../components/Auth';
import { TodoList } from '../components/TodoList';
import { UsersList } from '../components/UsersList';
import { Store } from '../stores/Store';

/* tslint:disable:object-literal-sort-keys */

const app = new Route({
    component: TodoApp,
    name: 'app',
    path: '/',
    /**
     * verify that the user is logged in
     * before we show any nested route under the 'app' route
     */
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
            beforeEnter: (state: IViewState, store: Store) => {
                if (store.todos.isEmpty) {
                    fetchTodos();
                }
            },
            onEnter: (state: IViewState) => {
                const { query } = state;
                if (query.filter != null) {
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
