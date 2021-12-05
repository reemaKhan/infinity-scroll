import React, { useState } from "react";
import {Form} from 'react-bootstrap';
import { useHistory} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './login.css';

const Login = ({setIsAuthenticated}) => {
    const [uname, setUname] = useState('');
    const [pwd, setpwd] = useState('');
    const [loginMsg, setLoginMsg] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (uname === "foo" && pwd === "bar") {
            setIsAuthenticated(true);
            setLoginMsg('Login in Successful');
            history.push('/home');
        }
    }

    return (
        <div className="login-wrapper">

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" onChange={e => setUname(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e => setpwd(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <div>{loginMsg}</div>
        </div>
    )
}

export default Login;