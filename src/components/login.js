import React, {useState, useEffect} from 'react';
import Auth from './../auth/auth';
import { UserDataContext} from '../containers/logincontext';


const Login = (props) => {

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = React.useContext(UserDataContext);

    const signupUser = (e) => {
        e.preventDefault();

        Auth.signup(email, name, password)
        .then(payload => {
            setUser(payload.user);
            props.history.push('/');
        }).catch(error => {
            alert(error);
        });
    }

    const loginUser = (e) => {
        e.preventDefault();

        Auth.signin(email, password)
        .then(payload => {
            setUser(payload.user);
            props.history.push('/');
        }).catch(error => {
            alert(error);
        });
    }

    const resetForm = () => {
        setEmail('');
        setPassword('');
        setName('');
    }

    return(
        <form className="form login" onSubmit={props.signup ? signupUser : loginUser}>
            <h1>{props.signup ? 'SIGN UP' : 'LOG IN'}</h1>

            {props.signup &&
            <div className="form-group">
                <label htmlFor="name">User name</label>
                <input required 
                name="name" 
                id="name" 
                value={name} 
                className="form-field"
                onChange={(e) => setName(e.target.value)}/>
            </div>}

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input required 
                name="email" 
                id="email" 
                value={email} 
                className="form-field"
                onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input required 
                name="password" 
                id="password" 
                value={password} 
                type="password" 
                className="form-field"
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="form-group buttons">
                <button className="btn btn-success">{props.signup ? 'SIGNUP' : 'LOGIN'}</button>
                <button 
                type="reset"
                onClick={resetForm}
                className="btn btn-success">RESET</button>
            </div>
        </form>
    )
};

export default Login;