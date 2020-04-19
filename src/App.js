
import React, {Component} from 'react';
import './App.css';
import Header from './components/header'
import {connect} from 'react-redux';
import {getTodos} from './actions/index'
import {getLists} from './actions/lists'
import Mytodos from './containers/mytodos'
import { Route, Switch } from 'react-router-dom'; //Switch: verifica ogni rotta e la prima che combacia con l' url si ferma
import Login from './components/login';
import SignUp from './components/signup';
import MyTodoLists from './containers/mytodolists';

class App extends Component {

  componentDidMount() {
    // this.props.getTodos();
    this.props.getLists();
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Switch> 
          <Route path="(/|/todos)" component={Mytodos} />
          <Route path="/lists/:list([0-9]+)/todos" component={Mytodos} />

          <Route path="/lists" component={MyTodoLists} />
          <Route path="/signup"  component={SignUp} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}


export default connect(null, {getTodos: getTodos, getLists: getLists})(App);
