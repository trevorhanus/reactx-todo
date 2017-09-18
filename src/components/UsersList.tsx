import { observer } from 'mobx-react';
import * as React from 'react';

export interface IUsersListProps {}

const UsersList = observer((props: IUsersListProps) => {

    return (
        <div>
            I'm the users!
        </div>
    );
});

export { UsersList };
