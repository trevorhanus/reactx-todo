import * as React from 'react';
import {findDOMNode} from 'react-dom';
import {observer} from 'mobx-react';
import {addTodo, toggleAll} from '../actions';
import {TodoFooter} from './TodoFooter';

export interface ITodoAppProps {
    routerOutlet?: any;
}

const TodoApp = observer((props: ITodoAppProps) => {

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
        <div>
            <header className="header">
                <h1>todos</h1>
                <input
                    ref={input => newFieldRef = input}
                    className="new-todo"
                    placeholder="What needs to be done?"
                    onKeyDown={ e => handleNewTodoKeyDown(e) }
                    autoFocus={true}
                />
            </header>
            <section className="main">
                <input
                    className="toggle-all"
                    type="checkbox"
                    onChange={ e => toggleAll() }
                />
                {props.routerOutlet}
            </section>
            <TodoFooter />
        </div>
    )
});

export {
    TodoApp
};
