import React, {Component} from 'react';

export default function todo({todo, onClick, Id}) {
    //  in realtà il onClick chiamerà questo dispatch(removeTodo(id)). infatti nel todolist il parametro onClick in firma è removeTodo
    return(
        <li  onClick={ () => {onClick(Id)}}>
            <span></span>
            {todo} 
        </li>
    );
}
