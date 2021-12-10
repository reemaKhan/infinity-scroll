import React from "react";
import { Route, Redirect } from "react-router";

function PrivateRoute({ comp:Component, ...rest }) {
    const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';
    return (
        <Route
            {...rest}
            render={
                (props) => {
                   return  isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
                }
            }
        />
    )
}
export default PrivateRoute;