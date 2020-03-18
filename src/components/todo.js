import React from 'react';

export default function todo({todoItem, onClick, Id}) {
    //  in realtà il onClick chiamerà questo dispatch(removeTodo(id)). infatti nel todolist il parametro onClick in firma è removeTodo
    return(
        <li  onClick={ () => {onClick(Id)}} className= {todoItem.completed ? "completed" : "uncompleted"}>
            <span className= {todoItem.completed ? "completed" : "uncompleted"}></span>
            {todoItem.todo} 
        </li>
    );
}