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
    const nowShowing = router.currentRoute.queryParams.filter ? router.currentRoute.queryParams.filter.toUpperCase() : null;

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
                    queryParams={{filter: 'all'}}
                    className={classNames({selected: nowShowing === 'ALL' || !nowShowing})}>
                        All
                    </Link>
                </li>
                {' '}
                <li>
                    <Link 
                    name='todos'
                    queryParams={{filter: 'active'}}
                    className={classNames({selected: nowShowing === 'ACTIVE'})}>
                        Active
                    </Link>
                </li>
                {' '}
                <li>
                    <Link 
                    name='todos'
                    queryParams={{filter: 'completed'}}
                    className={classNames({selected: nowShowing === 'COMPLETED'})}>
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
