import { Button } from "@mui/material";
import React from "react";
import { withRouter } from 'react-router-dom';

const Logout = (props) => {

    const { history } = props;

    return (
        <Button
            onClick={() => {
                sessionStorage.removeItem('isAuthenticated');
                history.push('/');
            }}>Logout</Button>
    )
}

export default withRouter(Logout);