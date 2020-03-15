import TodoList from '../components/todolist';
import {connect} from 'react-redux';
import {removeTodo} from '../actions/index'
/*
mapStateToProps viene dallo store e quando facciamo connect collega lo store a questa funzione.
come se passiamo store.getState()
*/
const mapStateToProps = (state) => {   //si puo chiamare in qualunque modo, basta che è una funzione che torna un oggetto
    return {
        todos: [...state.todos]
    }
}

const methods = {
    removeTodo : removeTodo
}

const myConnect = connect(mapStateToProps, methods)  // serve ad abbonarsi allo store che è nell' index
const MyTodoList = myConnect(TodoList);

export default MyTodoList;