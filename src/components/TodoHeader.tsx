import * as React from 'react';
import {addTodo} from '../actions';
import {findDOMNode} from 'react-dom';
import {observer} from 'mobx-react';

export interface ITodoHeaderProps {
    title: string;
}

const TodoHeader = observer((props: ITodoHeaderProps) => {

    return (
        <header className="header">
            <h1>{props.title}</h1>
        </header>
    )
});

export {
    TodoHeader
}
