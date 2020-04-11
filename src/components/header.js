import React from 'react'
import {Link, NavLink} from 'react-router-dom';

export default function header() {
    return (
      <header className="App-header">
        <nav>
          <ul className="menu">
            <li>
            <NavLink exact activeStyle={{backgroundColor:'red'}} to="/">my todo list</NavLink>
            </li>
            <li><NavLink activeClassName="active" to="/lists">LISTS</NavLink></li>
            <li><NavLink activeClassName="active" to="/todos">ALL TODOS</NavLink></li>
            <li><NavLink activeClassName="active" to="/signup">SIGN  UP</NavLink></li>
            <li><NavLink activeClassName="active" to="/login">LOGIN</NavLink></li>
          </ul>
        </nav>
        <h1>
          TODO LIST
        </h1>
      </header>
    )
}