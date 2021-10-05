import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import "./Login.css";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Ellipse from './Ellipse.png';
import FacebookLogin from 'react-facebook-login';
import { LinkContainer } from "react-router-bootstrap";

const theme = createTheme();

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            <Link color="inherit"> {'Terms & Conditions '} </Link>
            <img src={Ellipse} className="Ellipse" alt="Ellipse" />
            <Link color="inherit"> {'Privacy Policy'}</Link>
        </Typography>
    );
}

const responseFacebook = (response) => {
    console.log('login result', response);
}
const componentClicked = (data) => {
    console.warn(data);
}

export default function Login() {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // function validateForm() {
    //     return email.length > 0 && password.length > 0;
    // }

    // function handleSubmit(event) {
    //     event.preventDefault();
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    }
    return (

        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="EMAIL ADDRESS"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="PASSWORD"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Link href="#" variant="body2" color="inherit" style={{ float: 'right' }}>
                            Forgot password?
                </Link>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            LOGIN
            </Button>
                        <Link href="#" variant="body2" color="inherit" style={{ float: 'center' }}>
                            {"Do not have an account? Sign Up"}
                        </Link>
                        <LinkContainer to="/dashboard">
                            <FacebookLogin
                                appId="4270288336400547"
                                autoLoad={true}
                                fields="name,email,picture"
                                onClick={componentClicked}
                                callback={responseFacebook} />
                        </LinkContainer>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}