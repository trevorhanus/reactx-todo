import { Link, router } from '@trevorhanus/reactx';
import * as classNames from 'classnames';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { clearCompleted } from '../actions';
import { TodoStore } from '../stores/TodoStore';

export interface ITodoFooterProps {
    todoStore?: TodoStore;
}

const TodoFooter = inject('todoStore')(observer((props: ITodoFooterProps) => {
    const {todoStore} = props;

    const activeTodoWord = 'items';
    const {queryParams} = router.currentRoute;
    const nowShowing = queryParams.filter ? queryParams.filter.toUpperCase() : undefined;

    let clearButton = undefined;
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
                    name="todos"
                    queryParams={{filter: 'all'}}
                    className={classNames({selected: nowShowing === 'ALL' || !nowShowing})}>
                        All
                    </Link>
                </li>
                {' '}
                <li>
                    <Link 
                    name="todos"
                    queryParams={{filter: 'active'}}
                    className={classNames({selected: nowShowing === 'ACTIVE'})}>
                        Active
                    </Link>
                </li>
                {' '}
                <li>
                    <Link 
                    name="todos"
                    queryParams={{filter: 'completed'}}
                    className={classNames({selected: nowShowing === 'COMPLETED'})}>
                        Completed
                    </Link>
                </li>
            </ul>
            {clearButton}
        </footer>
    );
}));

export {
    TodoFooter,
};
