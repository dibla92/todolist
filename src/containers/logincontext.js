import React from 'react';
import Auth from '../auth/auth';

const userAct = Auth.getUser();
const UserDataContext = React.createContext(userAct);

const UserDataProvider = (props) => {

    const [user, setUser] = React.useState(userAct);
    
    return (
    <UserDataContext.Provider value={[user, setUser]}>
        {props.children}
    </UserDataContext.Provider>
    );
}


export {UserDataContext, UserDataProvider};