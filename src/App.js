
import React, {Component} from 'react';
import './App.css';
import Header from './components/header'
import AddNewTodo from './containers/addnew'
import MyTodoList from './containers/mytodolist'
import MyFooterContainer from './containers/todofootercontainer'
import {connect} from 'react-redux';
import {getTodos} from './actions'
import Errorboundary from './components/errorboundary';

class App extends Component {

  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <AddNewTodo/>
          <Errorboundary>
             <MyTodoList />  
          </Errorboundary>
          {/* MyTodoList è il componente che avvolge il componente todolist che si occupa di mostrare i todos che sono
          immagazzinati nello store (forniti dal provider nell' index principale) */}
          <MyFooterContainer />
        </div>
      </div>
    );
  }
}


export default connect(null, {getTodos: getTodos})(App);
