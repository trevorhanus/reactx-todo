import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { TodoStore } from '../stores/TodoStore';
import { TodoItem } from './TodoItem';

export interface ITodoListProps {
    todoStore?: TodoStore;
}

export const TodoList = inject('todoStore')(observer((props: ITodoListProps) => {
    const {todoStore} = props;

    const todos = todoStore.todos.map(todo => {
        return <TodoItem key={todo.id} todo={todo} />;
    });

    return (
        <ul className="todo-list">
            {
                todoStore.loading
                ? <div> Loading </div>
                : todos
            }
        </ul>
    );
}));
