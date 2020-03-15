export const addTodo = (todo) => {
    
    return {
      type: 'ADD_TODO',
      todo   // significa todo: todo se chiave valore hanno lo stesso nome si puo abbreviare
    }

  }

  export const removeTodo = (i) => {
    return {
      type: 'REMOVE_TODO',
      id: i   // significa todo: todo se chiave valore hanno lo stesso nome si puo abbreviare
    }

  }