import React from 'react';
import Todo from './todo'

export default function todoList({todos, toggleTodo, removeTodo}) {
    return(
        <ul>
            {
                todos.map((todo, i) => <Todo Id = {todo.id} key={todo.id} onClick = {toggleTodo} todoItem={todo} rimuovilo = {removeTodo} /> ) 
            }
        </ul>
    );
}

