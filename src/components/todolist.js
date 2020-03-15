import React, {Component} from 'react';
import Todo from './todo'

export default function todoList({todos, removeTodo}) {
    return(
        <ul>
            {
                todos.map((todo, i) => <Todo Id = {i} key={i} onClick = {removeTodo} todo={todo} /> ) 
            }
        </ul>
    );
}

