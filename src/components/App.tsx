import * as React from 'react';
import {observer} from 'mobx-react';
import {router} from '@trevorhanus/reactx';

export interface ITodoAppProps {
    todoItems: any;
}

const TodoApp = observer((props: ITodoAppProps) => {

    return (
        <div>
            <header className="header">
                <h1>todos</h1>
                <input
                    ref="newField"
                    className="new-todo"
                    placeholder="What needs to be done?"
                    onKeyDown={ e => this.handleNewTodoKeyDown(e) }
                    autoFocus={true}
                />
            </header>
            <section className="main">
                <input
                    className="toggle-all"
                    type="checkbox"
                    onChange={ e => this.toggleAll(e) }
                />
                <ul className="todo-list">
                    {props.todoItems}
                </ul>
            </section>
            {/* {footer} */}
        </div>
    )
});

export {
    TodoApp
};
