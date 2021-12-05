import React, { useContext } from "react";
import { Route, Redirect } from "react-router";
import { AppStoreContext } from "./Store";

function PrivateRoute({ component:Component, ...rest }) {
    const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';
    return (
        <Route
            {...rest}
            render={
                (props) => {
                    isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
                }
            }
        />
    )
}
export default PrivateRoute;