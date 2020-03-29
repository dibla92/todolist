import {LISTS, ADD_LIST, REMOVE_LIST} from '../actions/actiontypes'

export default function listsReducer(state = [], action) {
    switch(action.type) {
      case `${ADD_LIST}_FULFILLED`: 
        return [
            action.payload.data,
            ...state
          ];
      case `${REMOVE_LIST}_FULFILLED` :
        return state.filter(elem =>  elem.id!=action.payload.config.id)
        
      case `${LISTS}_FULFILLED` :
        return action.payload.data

      default: return state;
    }
  };