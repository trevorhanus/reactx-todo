import {Actions} from '@trevorhanus/actions';

// for development purposes only
(window as any).Actions = Actions;

import {AddTodo} from './AddTodo';
import {ClearCompleted} from './ClearCompleted';
import {DeleteTodo} from './DeleteTodo';
import {FilterTodos} from './FilterTodos';
import {Login} from './Login';
import {ToggleAll} from './ToggleAll';

export function addTodo(message: string): void {
    const action = new AddTodo({message});
    Actions.dispatch(action);
}

export function deleteTodo(id: string): void {
    const action = new DeleteTodo({id});
    Actions.dispatch(action);
}

export function clearCompleted(): void {
    const action = new ClearCompleted({});
    Actions.dispatch(action);
}

export function filterTodos(filter: 'ALL' | 'ACTIVE' | 'COMPLETED'): void {
    const action = new FilterTodos({filter});
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
