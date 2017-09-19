import { observer } from 'mobx-react';
import * as React from 'react';
import { findDOMNode } from 'react-dom';
import { addTodo, toggleAll } from '../actions';
import { Keys } from '../utils/Keys';
import { UndoRedoButtons } from './UndoRedoButtons';

export const AddTodoControl = observer(() => {
    let newFieldRef;

    const handleNewTodoKeyDown = (event: React.KeyboardEvent<any>) => {
        if (event.keyCode !== Keys.Enter) {
          return;
        }

        event.preventDefault();

        const val = findDOMNode<HTMLInputElement>(newFieldRef).value.trim();
        if (val != undefined) {
            addTodo(val);
            findDOMNode<HTMLInputElement>(newFieldRef).value = '';
        }
    };

    return (
        <section className="add-todo-control">
            <input
                className="toggle-all"
                type="checkbox"
                onChange={ e => toggleAll() }
            />
            <input
                ref={input => newFieldRef = input}
                className="new-todo"
                placeholder="What needs to be done?"
                onKeyDown={ e => handleNewTodoKeyDown(e) }
                autoFocus={true}
            />
            <UndoRedoButtons />
        </section>
    );
});
