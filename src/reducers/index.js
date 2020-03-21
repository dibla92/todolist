export default function storeReducer(state = {}, action) {
    switch(action.type) {
      case 'ADD_TODO_FULFILLED': 
        return {
          ...state,
          activeFilter: 'TODO',
          todos: [
            action.payload.data,
            ...state.todos
          ]
        }
      case 'REMOVE_TODO' :
        return {
          ...state,
          todos: [
            ...state.todos.slice(0, action.id),
            ...state.todos.slice( action.id +1),
          ]
        }
        case 'SET_FILTER' :
          return {
            ...state,
            activeFilter: action.activeFilter
          }
      case 'TOGGLE_TODO_FULFILLED' :
        return {
          ...state,
          todos: state.todos.map((todo) => {
            if(todo.id != action.payload.data.id) {
              return todo;
            }
            return {
              ...todo,
              completed: action.payload.data.completed
            }
          })
        }
        case 'TOGGLE_TODO_REJECTED' :
          let indice = action.payload.config.url.substring(action.payload.config.url.length-1);
          return {
            ...state,
            todos: state.todos.map((todo) => {
              if(todo.id != indice) {
                return todo;
              }
              return {
                ...todo,
                completed: !todo.completed
              }
            })
          }
      case 'TODOS_FULFILLED' :
        return {
          ...state,
          todos: action.payload.data
        }
      default: return {...state};
    }
  };