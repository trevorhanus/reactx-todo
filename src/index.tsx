import { router, Router } from '@trevorhanus/reactx';
import { observer, Provider } from 'mobx-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { routes } from './routes/routes';
import { Store } from './stores/Store';

const store = new Store();
router.start(routes, store);

const App = observer(() => {
    return (
        <Provider
            todoStore={store.todos}
            >
            <Router />
        </Provider>
    );
});

ReactDOM.render(<App />, document.getElementsByClassName('todoapp')[0]);
