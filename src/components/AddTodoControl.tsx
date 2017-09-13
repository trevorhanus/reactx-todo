import * as React from 'react';
import {addTodo, toggleAll} from '../actions';
import {findDOMNode} from 'react-dom';
import {observer} from 'mobx-react';
import {UndoRedoButtons} from './UndoRedoButtons';

const AddTodoControl = observer((props: {}) => {
    let newFieldRef = null;

    const handleNewTodoKeyDown = (event : React.KeyboardEvent<any>) => {
        if (event.keyCode !== 13) {
          return;
        }
    
        event.preventDefault();
    
        var val = findDOMNode<HTMLInputElement>(newFieldRef).value.trim();
        if (val) {
            addTodo(val);
            findDOMNode<HTMLInputElement>(newFieldRef).value = '';
        }
    }

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
    )
});

export {
    AddTodoControl
}
