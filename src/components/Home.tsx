import { router } from '@trevorhanus/reactx-router';
import { observer } from 'mobx-react';
import * as React from 'react';

export const Home = observer(() => {
    return (
        <div>
            Current path: {router.currentPath}
            <br />
            Current params: {JSON.stringify(router.currentParams)}
        </div>
    );
});
