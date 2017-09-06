import * as React from 'react';
import {observer} from 'mobx-react';
import {router} from '@trevorhanus/reactx';

const Home = observer(() => {
    return (
        <div>
            Current path: {router.currentPath}
            <br />
            Current params: {JSON.stringify(router.currentParams)}
        </div>
    )
});

export {
    Home
};
