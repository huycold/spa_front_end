import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';




export function PublicRouter({ component: Component, restricted = false, ...rest }) {
    const { isLogin } = useContext(UserContext)
    return (
        <Route {...rest} render={props => (
            (isLogin && restricted) ?  //restricted==true thi dang nhap roi khong vao duoc login
                <Redirect to='/' />
                : <Component {...props} />
        )}>

        </Route>
    );
}


export function PrivateRoute({ component: Component, restricted = false, ...rest }) {

    const { isLogin } = useContext(UserContext)
    return (
        <Route {...rest} render={props => (
            isLogin ?
                <Component {...props} />
                : <Redirect to="/register" />
        )}>
        </Route>
    );
}

