import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {applyMiddleware, createStore, compose} from 'redux'  //Creare uno store, l' unico modo di cambiare i dati nello store è il dispatch()
import storeReducer from './reducers/index'
import logger from 'redux-logger'; //senza questo si puo vedere come farlo manualmente in fondo alla pagina

let storeTodos =  {
  activeFilter: 'ALL',
  todos: [
    {id:0, todo: 'fare la spesa', completed: false},
    {id:1, todo: 'fare i compiti', completed: false},
    {id:2, todo: 'chiamare la mamma', completed: true}
  ]
};
  
if(localStorage.getItem('mytodolist')) {
  const currState = JSON.parse(localStorage.getItem('mytodolist'));
  if(currState){
    storeTodos = currState;
  }
}


  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(storeReducer, { ...storeTodos }, 
  composeEnhancers(applyMiddleware(logger))
);


store.subscribe(()=>  {
  const currState = JSON.stringify(store.getState());
  localStorage.setItem('mytodolist', currState);
});

ReactDOM.render(
<Provider store = {store}>
<App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


/*
// USATO PER SPIEGAZIONE MA QUI USIAMO LOGGER2
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//rivede 2 parametri getState e dispatch si può vedere la riga 28 di applyMiddleware.js
function logger({getState, dispatch}){  //SOLO LA PRIMA VOLTA
  console.log('MIDDLEWARE CHIAMATO');
  return function (next) { //riceve il prossimo metodo dispatch del middleware  //APPLYMIDDLEWARE CHIAMA QUESTA FUNZIONE
    console.log('PRIMA DELLA CHIAMATA', getState());
    return function (action) {  // QUANDO VIENE FATTO IL DISPATCH DI UNA FUNZIONE VIENE CHIAMATA QUESTA
      console.log('AZIONE', action);
      console.log('PRIMA DELLA AZIONE', getState());
      let result = next(action);  //il next chiama il logger2, concatena i middleware
      console.log('DOPO DELLA AZIONE', getState());
      console.log('RESULT', result);
      return result;
    }
  }
}

// logger2 gli viene passato lo store e chiama una funzione a cui torna (next) una funzione che è il middleware chiamato, questa torna un altra funzione(action) che torna il result
const logger2 = store /*({getState, dispatch})*//* => next => action => {
  console.log('AZIONE2', action);
  let result = next(action);
  console.log('RESULT2', result);
  return result
}

*/