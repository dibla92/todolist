import React from 'react';
import Todo from './todo'

export default function todoList({todos, removeTodo, toggleTodo}) {
    return(
        <ul>
            {
                todos.map((todo, i) => <Todo Id = {todo.id} key={todo.id} onClick = {toggleTodo} todoItem={todo} /> ) 
            }
        </ul>
    );
}

