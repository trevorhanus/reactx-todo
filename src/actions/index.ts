import {Actions} from '@trevorhanus/actions';
import {FetchTodos} from './FetchTodos';

// for development purposes only
(window as any).Actions = Actions;

import {AddTodo} from './AddTodo';
import {ClearCompleted} from './ClearCompleted';
import {DeleteTodo} from './DeleteTodo';
import {FilterTodos} from './FilterTodos';
import {Login} from './Login';
import {ToggleAll} from './ToggleAll';
import {UpdateTodo} from './UpdateTodo';

export function addTodo(message: string): void {
    const action = new AddTodo({message});
    Actions.dispatch(action);
}

export function deleteTodo(id: string): void {
    const action = new DeleteTodo({id});
    Actions.dispatch(action);
}

export function fetchTodos(): void {
    const action = new FetchTodos();
    Actions.dispatch(action);
}

export function clearCompleted(): void {
    const action = new ClearCompleted({});
    Actions.dispatch(action);
}

export function filterTodos(filter: string): void {
    if (!filter) return;
    filter = filter.toUpperCase();
    if (['ALL', 'ACTIVE', 'COMPLETED'].indexOf(filter) === -1) return;
    const action = new FilterTodos({filter: (filter as 'ALL' | 'ACTIVE' | 'COMPLETED')});
    Actions.dispatch(action);
}

export function login(username: string, password: string): void {
    const action = new Login({username, password});
    Actions.dispatch(action);
}

export function toggleAll(): void {
    const action = new ToggleAll({});
    Actions.dispatch(action);
}

export function updateTodo(id: string, newMessage: string): void {
    const action = new UpdateTodo({todoId: id, newMessage});
    Actions.dispatch(action);
}
