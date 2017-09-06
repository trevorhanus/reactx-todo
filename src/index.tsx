import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observer, Provider} from 'mobx-react';
import {Router, router} from '@trevorhanus/reactx';
import {routes} from './routes';
import {Store} from './stores/Store';

router.start(routes);
const store = new Store();
store.todos.populate([
    {id: '1', message: 'stuff'}
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
