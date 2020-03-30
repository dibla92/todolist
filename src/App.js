
import React, {Component} from 'react';
import './App.css';
import Header from './components/header'
import {connect} from 'react-redux';
import {getTodos} from './actions/index'
import {getLists} from './actions/lists'
import Mytodos from './containers/mytodos'
import { Route } from 'react-router-dom';
import Lists from './components/list' 
import MyTodoLists from './containers/mytodolists'

class App extends Component {

  componentDidMount() {
    this.props.getTodos();
    this.props.getLists();
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Route path="(/|/todos)" component={Mytodos} />

        <Route path="/lists" exact component={MyTodoLists} />
      </div>
    );
  }
}


export default connect(null, {getTodos: getTodos, getLists: getLists})(App);
