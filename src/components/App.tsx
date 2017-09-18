import { observer } from 'mobx-react';
import * as React from 'react';
import { AddTodoControl } from './AddTodoControl';
import { TodoFooter } from './TodoFooter';
import { TodoHeader } from './TodoHeader';

export interface ITodoAppProps {
    routerOutlet?: any; // component rendered from the nested routes
}

export const TodoApp = observer((props: ITodoAppProps) => {

    return (
        <div>
            <TodoHeader title="todos"/>
            <AddTodoControl />
            <section className="main">
                {props.routerOutlet}
            </section>
            <TodoFooter />
        </div>
    );
});
