import React from 'react'
import { NavLink} from 'react-router-dom';
import Auth from  '../auth/auth'

export default function header() {
  const user = Auth.getUser();
    return (
      <header className="App-header">
        <nav>
          <ul className="menu header">
            {user ?
            <>
            <li>
            <NavLink exact activeStyle={{backgroundColor:'red'}} to="/">my todo list</NavLink>
            </li>
            <li><NavLink activeClassName="active" to="/lists">LISTS</NavLink></li>
            <li><NavLink activeClassName="active" to="/todos">ALL TODOS</NavLink></li>
            </>
            : null}
            {
              user ? 
              <li><span style={{color:'red'}}>Welcome {user.name} </span> <NavLink  to="/logout">LOGOUT</NavLink></li>
              : 
              (<>
            <li><NavLink activeClassName="active" to="/signup">SIGN  UP</NavLink></li>
            <li><NavLink activeClassName="active" to="/login">LOGIN</NavLink></li>
            </>
            )}
          </ul>
        </nav>
        <h1>
          TODO LIST
        </h1>
      </header>
    )
}