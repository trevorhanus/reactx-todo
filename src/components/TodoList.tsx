import * as React from 'react';
import {inject, observer} from 'mobx-react';
import {TodoApp} from './App';
import {TodoItem} from './TodoItem';
import {TodoStore} from '../stores/TodoStore';

export interface ITodoListProps {
    todoStore?: TodoStore;
}

const TodoList = inject('todoStore')(observer((props: ITodoListProps) => {
    const {todoStore} = props;

    const todos = todoStore.todos.map(todo => {
        return <TodoItem key={todo.id} todo={todo} />
    });

    return (
        <ul className="todo-list">
            {todos}
        </ul>
    )
}));

export {
    TodoList
};
