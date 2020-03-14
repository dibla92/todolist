
import React, {Component} from 'react';
import {createStore} from 'redux'  //Creare uno store, l' unico modo di cambiare i dati nello store è il dispatch()
import './App.css';
let todos = [
  'fare la spesa',
  'fare i compiti',
  'chiamare la mamma'
]

function storeReducer(state = {}, action) {
  switch(action.type) {
    case 'ADD_TODO': 
      return {
        todos: [
          action.todo,
          ...state.todos
        ]
      }
    case 'REMOVE_TODO' :
      return {
        todos: [
          ...state.todos.slice(0, action.id),
          ...state.todos.slice( action.id +1),
        ]
      }
    default: return {...state};
  }
};

const store = createStore(storeReducer, { todos: [...todos] });


class App extends Component {

  constructor() {
    super();
    this.state = {
      todos: []
    }
    
    this.todoInput = React.createRef();

  }

  componentDidMount() {
    this.setState({todos:[...store.getState().todos]})
    store.subscribe( () => {
      console.log(store.getState());
      this.setState({todos:[...store.getState().todos]})
    })
  }

  addTodo = () => {
    const todo = this.todoInput.current.value;
    store.dispatch({
      type: 'ADD_TODO',
      todo   // significa todo: todo se chiave valore hanno lo stesso nome si puo abbreviare
    })

  }

  removeTodo = (i) => {
    store.dispatch({
      type: 'REMOVE_TODO',
      id: i   // significa todo: todo se chiave valore hanno lo stesso nome si puo abbreviare
    })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            TODO LIST
          </h1>
        </header>
        <input ref = {this.todoInput} />
        <button onClick = {this.addTodo}>Add</button>
        <ul>
          {this.state.todos.map((todo, i) => <li key={i}>{todo} <button onClick={ this.removeTodo.bind(null, i) }>-</button></li>)}
        </ul>
      </div>
    );
  }
}

export default App;
