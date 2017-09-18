import { observer } from 'mobx-react';
import * as React from 'react';
import { login } from '../actions';

export interface IAuthProps {}

const Auth = observer((props: IAuthProps) => {
    const handleSubmit = () => {
        login('test_username', 'test_password');
    };

    return (
        <div>
            <header className="header">
                <h1>Login</h1>
            </header>
            <br/>
            <button onClick={handleSubmit}>Login</button>
        </div>
    );
});

export { Auth };
