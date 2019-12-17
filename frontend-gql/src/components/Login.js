import React, { Component } from 'react';
import Box from '../styles/Box';
import styled from 'styled-components';
import GoogleLogin from 'react-google-login';

export default class Login extends Component {


    responseGoogle = (response) => {
        console.log("google res => ",response);
    }

    render() {
        return (
            <Box display="flex" backgroundColor="red">
                <Box display="flex">
                    <GoogleLogin
                        //clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                        clientId={process.env.REACT_APP_GOOGLE_AUTH}
                        buttonText="Login"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />

                </Box>
            </Box>
        )
    }
}


const StyledInput = styled('input')`
    border-radius: 15px;
    font-size:20px;
    text-align: start;
    margin-top: 25px;
    height: 50px;
`