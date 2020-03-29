import TodoList from '../components/todolist';
import {connect} from 'react-redux';
import {removeTodo, toggleTodo} from '../actions/index'

const filterMyTodos = (todos = [], filter='ALL') => {
    switch(filter) {
        case 'TODO': return todos.filter( todo => !todo.completed);
        case 'COMPLETED': return todos.filter( todo => todo.completed);
        case 'ALL': return todos;
        default: return todos;
    }
}

/*
mapStateToProps viene dallo store e quando facciamo connect collega lo store a questa funzione.
come se passiamo store.getState()
*/
const mapStateToProps = (state) => {   //si puo chiamare in qualunque modo, basta che è una funzione che torna un oggetto
    console.log('store' + JSON.stringify(state.todos))
    return {
        ...state,
        todos: filterMyTodos(state.todos, state.setFilter)
    }
}

const methods = {
    removeTodo : removeTodo,
    toggleTodo : toggleTodo
}

const myConnect = connect(mapStateToProps, methods)  // serve ad abbonarsi allo store che è nell' index, in sostanza primo parametro per passare parametri secondo per passare i metodi da dispatchare
const MyTodoList = myConnect(TodoList);

export default MyTodoList;