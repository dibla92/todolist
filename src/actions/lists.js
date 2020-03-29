import { APILISTURL } from '../config/config';
import axios from 'axios';
import {LISTS, ADD_LIST, REMOVE_LIST} from './actiontypes'

export const getLists = () => {
    
  return {
    type: LISTS,
    payload: axios.get(APILISTURL)
  }

}

export const addList = (name) => {
    
    return {
      type: ADD_LIST,
      payload: axios.post(APILISTURL, {
        name: name
      })
      // todo   // significa todo: todo se chiave valore hanno lo stesso nome si puo abbreviare
    }

  }

  export const removeList = (i) => {
    return {
      type: REMOVE_LIST,
      payload: axios.delete(APILISTURL +'/' + i, {id: i})
      // id: i   // significa todo: todo se chiave valore hanno lo stesso nome si puo abbreviare
    }

}