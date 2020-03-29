import React from 'react';
import Todo from './todo'
import propTypes from 'prop-types'

export default function todoList(props
    // {todos, toggleTodo, removeTodo}
    ) {
    if(props.error.hasError) {
        throw new Error(props.error.errorMessage);
    }
    return(
        <ul>
            {
                props.todos.map((todo, i) => <Todo Id = {todo.id} key={todo.id} todoItem={todo}
                    {...props}
                    // onClick = {toggleTodo} todoItem={todo} removeTodo = {removeTodo} 
                /> ) 
            }
        </ul>
    );
}

todoList.propTypes = {
    props: propTypes.shape({
        hasError: propTypes.bool,
        errorMessage: propTypes.string,
        todos: propTypes.array
    })
}