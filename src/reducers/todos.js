import {TODOS, ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from '../actions/actiontypes'

export default function todosReducer(state = [], action) {
    switch(action.type) {
      case `${ADD_TODO}_FULFILLED`: {
        return [
            action.payload.data.result,
            ...state
          ];
      }
      case `${REMOVE_TODO}_FULFILLED` : {
        const success = action.payload.data.success;

        return state.filter(elem =>  success && elem.id!=action.payload.config.id)
      }
      case `${TOGGLE_TODO}_FULFILLED` : {
        const result = action.payload.data.result;
        let indice = result.id;
        return state.map((todo) => {
            if(todo.id != indice) {
              return todo;
            }
            return result;
          })
      }
      case `${TODOS}_FULFILLED` : {
        const list = +action.payload.config.list;
        const todos = action.payload.data.result.data;
        const success = action.payload.data.success;
        return todos;
      }

      default: return state;
    }
  };