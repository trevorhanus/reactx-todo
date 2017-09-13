import * as React from 'react';
import * as classNames from 'classnames';
import {clearCompleted} from '../actions';
import {inject, observer} from 'mobx-react';
import {Link} from '@trevorhanus/reactx';
import {TodoStore} from '../stores/TodoStore';
import {router} from '@trevorhanus/reactx';

export interface ITodoFooterProps {
    todoStore?: TodoStore;
}

const TodoFooter = inject('todoStore')(observer((props: ITodoFooterProps) => {
    const {todoStore} = props;

    const activeTodoWord = 'items';
    const nowShowing: string = 'ALL_TODOS';

    var clearButton = null;
    if (todoStore.completedCount > 0) {
        clearButton = (
        <button
            className="clear-completed"
            onClick={clearCompleted}>
            Clear completed
        </button>
        );
    }

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{todoStore.activeCount}</strong> {activeTodoWord} left
            </span>
            <ul className="filters">
                <li>
                    <Link 
                    name='todos'
                    queryParams={{all: 'true'}}
                    className={classNames({selected: router.currentRoute.queryParams.all === 'true'})}>
                        All
                    </Link>
                </li>
                {' '}
                <li>
                    <Link 
                    name='todos'
                    queryParams={{active: 'true'}}
                    className={classNames({selected: router.currentRoute.queryParams.active === 'true'})}>
                        Active
                    </Link>
                </li>
                {' '}
                <li>
                    <Link 
                    name='todos'
                    queryParams={{completed: 'true'}}
                    className={classNames({selected: router.currentRoute.queryParams.completed === 'true'})}>
                        Completed
                    </Link>
                </li>
            </ul>
            {clearButton}
        </footer>
    )
}));

export {
    TodoFooter
};
