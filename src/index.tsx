import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observer, Provider} from 'mobx-react';
import {Router, router} from '@trevorhanus/reactx';
import {routes} from './routes';
import {Store} from './stores/Store';

const store = new Store();
router.start(routes, store);

// populate the todo store with a couple todos
store.todos.populate([
    {id: '1', message: 'learn reactx'},
    {id: '2', message: 'conquer the World'}
]);

const App = observer(() => {
    return (
        <Provider
            todoStore={store.todos}>
            <Router />
        </Provider>
    )
});

ReactDOM.render(<App />, document.getElementsByClassName('todoapp')[0]);
