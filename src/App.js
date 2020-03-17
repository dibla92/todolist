
import React, {Component} from 'react';
import './App.css';
import Header from './components/header'
import AddNewTodo from './containers/addnew'
import MyTodoList from './containers/mytodolist'
import TodoFooter from './components/todofooter'


class App extends Component {


  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <AddNewTodo/>
          <MyTodoList />  
          {/* MyTodoList è il componente che avvolge il componente todolist che si occupa di mostrare i todos che sono
          immagazzinati nello store (forniti dal provider nell' index principale) */}
          <TodoFooter/>
        </div>
      </div>
    );
  }
}

export default App;
