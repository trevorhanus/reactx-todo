import {Route} from '@trevorhanus/reactx';
import {TodoList} from '../components/TodoList';

const todos = new Route({
    name: 'todos',
    route: '/',
    component: TodoList,
    acceptedQueryParams: ['active', 'completed']
});

const routes = [todos];

export {
    routes
}
