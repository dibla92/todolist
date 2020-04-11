
import React, {Component} from 'react';
import './App.css';
import Header from './components/header'
import {connect} from 'react-redux';
import {getTodos} from './actions/index'
import {getLists} from './actions/lists'
import Mytodos from './containers/mytodos'
import { Route, Switch } from 'react-router-dom'; //Switch: verifica ogni rotta e la prima che combacia con l' url si ferma
import Lists from './components/lists' 
import MyTodoLists from './containers/mytodolists'

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
          <Route path="/signup"  render = {()=> <div>SIGN UP</div>} />
          <Route path="/login" render = {()=> <div title="LOGIN">log in </div>} />
        </Switch>
      </div>
    );
  }
}


export default connect(null, {getTodos: getTodos, getLists: getLists})(App);
