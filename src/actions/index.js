import { APIURL } from '../config/config';
import axios from 'axios';

export const getTodos = () => {
    
  return {
    type: 'TODOS',
    payload: axios.get(APIURL)
  }

}

export const addTodo = (todo) => {
    
    return {
      type: 'ADD_TODO',
      payload: axios.post(APIURL, {
        todo: todo,
        completed: false
      })
      // todo   // significa todo: todo se chiave valore hanno lo stesso nome si puo abbreviare
    }

  }

  export const filterTodo = (filter = 'ALL') => {
    return {
      type: 'SET_FILTER',
      activeFilter: filter
    }

  }

  export const toggleTodo = (i, value) => {
    return {
      type: 'TOGGLE_TODO',
      payload: axios.patch(APIURL +'/' + i,
      {completed: value}
      )
      // id: i   // significa todo: todo se chiave valore hanno lo stesso nome si puo abbreviare
    }

  }

  export const removeTodo = (i) => {
    return {
      type: 'REMOVE_TODO',
      id: i   // significa todo: todo se chiave valore hanno lo stesso nome si puo abbreviare
    }

  }