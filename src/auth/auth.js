import axios from 'axios';
import {AUTH_URL} from './../config/config'

function Auth() {

    const manageResult = (result) => {
        const data = result['data'];
        if(!data || !data['access_token']){
            return Promise.reject('Invalid server response');
        }
        const expireDate = (new Date()).getTime() + data['expires_in']*1000;
        localStorage.setItem('token-expires', expireDate)
        localStorage.setItem('auth', JSON.stringify(result.data))
        return result.data;
    }

    const isTokenExpired = () => {
        const expired = +localStorage.getItem('token-expires');
        const res = (new Date())> expired;
        if(res) {
            localStorage.removeItem('token-expires');
            localStorage.removeItem('auth');
        }
        return res;
    }

    const handleError = (resp) => {
        let message = '';
        switch(+resp.status){
            case 401: 
                message = resp.data.error;
                break;
            case 500:
                 message = resp.data.message;
                break;
            default:
                message= 'Qualcosa è andato storto';
                break;
        }
        return message;
    }

    const addAxiosToken =() => {
        const token = getToken();
        if(token) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        }
    }

    const signin = async (email, password) => {
        try {
            const result = await axios.post( AUTH_URL + 'login',
            {
                email,
                password
            });
            return manageResult(result);
        } catch (e) {
            console.log(e.response.data.error);
            return Promise.reject(handleError(e.response));
        }
    };

    const getToken = ()=> {
        if(isTokenExpired()){
            return null;
        }
        const auth = JSON.parse(localStorage.getItem('auth'));
        if(auth){
            return auth.access_token
        } else {
            return null;
        }
    }

    const getUser = () => {
        if(isTokenExpired()){
            return null;
        }
        const auth = JSON.parse(localStorage.getItem('auth'));
        if(auth){
            return auth.user
        } else {
            return null;
        }
    }

    const signup = async (email, name, password) => {
        try {
            const result = await axios.post( AUTH_URL + 'signup',
            {
                email: email,
                name: name,
                password: password
            });
            return manageResult(result);
        } catch (e) {
            console.log(e.response.data.error);
            return Promise.reject(handleError(e.response));
        }
    };

    const logout = async () => {
        addAxiosToken();
        try {
            const result = await axios.post(AUTH_URL + 'logout');
            localStorage.removeItem('auth');
            localStorage.removeItem('token-expires');

            return result;
        } catch(e) {
            return Promise.reject(handleError(e.response));
        };
    };

    const refresh = () => {};

    return {
        signin: signin,
        signup,
        logout,
        refresh,
        getUser,
        isTokenExpired
    }
}

const authMethods = Auth();

export default authMethods;