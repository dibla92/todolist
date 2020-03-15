import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore} from 'redux'  //Creare uno store, l' unico modo di cambiare i dati nello store è il dispatch()
import storeReducer from './reducers/index'

let todos = [
    'fare la spesa',
    'fare i compiti',
    'chiamare la mamma'
  ]
  
  
  
const store = createStore(storeReducer, { todos: [...todos] });

ReactDOM.render(
<Provider store = {store}>
<App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
