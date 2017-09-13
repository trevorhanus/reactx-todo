import * as React from 'react';
import {findDOMNode} from 'react-dom';
import {observer} from 'mobx-react';
import {addTodo, toggleAll} from '../actions';
import {AddTodoControl} from './AddTodoControl';
import {TodoHeader} from './TodoHeader';
import {TodoFooter} from './TodoFooter';

export interface ITodoAppProps {
    routerOutlet?: any; // component rendered from the nested routes
}

const TodoApp = observer((props: ITodoAppProps) => {

    return (
        <div>
            <TodoHeader title="todos"/>
            <AddTodoControl />
            <section className="main">
                {props.routerOutlet}
            </section>
            <TodoFooter />
        </div>
    )
});

export {
    TodoApp
};
