import React from 'react';
import Login from './login';

const SignUp = (props) => {

    return(
        <Login {...props} signup={true}></Login>
    )
};

export default SignUp;