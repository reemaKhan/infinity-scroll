import React, { useState } from "react";
import { withRouter } from 'react-router';
import './login.css';
import { Box, Typography, TextField, Container, Button } from "@mui/material";

const Login = ({ setIsAuthenticated, history }) => {
    const [uname, setUname] = useState('');
    const [pwd, setpwd] = useState('');
    const [loginMsg, setLoginMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (uname === "foo" && pwd === "bar") {
            setIsAuthenticated(true);
            setLoginMsg('Login in Successful');
            history.push('/home');
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="User Name"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    onChange={e => setUname(e.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={e => setpwd(e.target.value)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
                <Typography variant="caption">Note : Username-foo, pwd- bar</Typography>
            </Box>
            <div>{loginMsg}</div>
        </Container>
    )
}

export default withRouter(Login);