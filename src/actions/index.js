import { APIURL, APIFILTERURL } from '../config/config';
import axios from 'axios';
import {TODOS, ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_FILTER} from './actiontypes'


export const getTodos = ( list = 0) => {    
  return {
    type: TODOS,
    payload: axios.get(APIURL + '?list_id='+ list, {list})
  }

}

export const addTodo = (todo, list = 0) => {
    
    return {
      type: ADD_TODO,
      payload: axios.post(APIURL, {
        todo: todo,
        list_id: +list,
        completed: false
      })
      // todo   // significa todo: todo se chiave valore hanno lo stesso nome si puo abbreviare
    }

  }

  export const filterTodo = (filter = 'ALL') => {
    return {
      type: SET_FILTER,
      payload: axios.post(APIFILTERURL, 
      {filter}
      )
    }

  }

  // export const toggleTodo = (i, value) => {
  //   return {
  //     type: 'TOGGLE_TODO',
  //     payload: axios.post(APIURL,
  //     {completed: value},
  //     {id: i}
  //     )
  //     // id: i   // significa todo: todo se chiave valore hanno lo stesso nome si puo abbreviare
  //   }

  // }

  export const toggleTodo = (todo, value) => {
    return {
      type: TOGGLE_TODO,
      payload: axios.patch(APIURL +'/' + todo.id,
      {
        ...todo,
        completed: value
      },
      { id: todo.id}
      )
      // id: i   // significa todo: todo se chiave valore hanno lo stesso nome si puo abbreviare
    }

  }

  export const removeTodo = (i) => {
    return {
      type: REMOVE_TODO,
      payload: axios.delete(APIURL +'/' + i, {id: i})
      // id: i   // significa todo: todo se chiave valore hanno lo stesso nome si puo abbreviare
    }

  }