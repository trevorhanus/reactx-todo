import * as React from 'react';
import {observer} from 'mobx-react';

export interface IUsersListProps {}

const UsersList = observer((props: IUsersListProps) => {

    return (
        <div>
            I'm the users!
        </div>
    )
});

export {
    UsersList
}
