import React from 'react';

export default function todo({todoItem, onClick, Id, rimuovilo}) {
    //  in realtà il onClick chiamerà questo dispatch(toggleTodo(id)). infatti nel todolist il parametro onClick in firma è removeTodo
    return(
        // <div className="buttonRemove">
        <li  onClick={ () => {onClick(Id, !todoItem.completed)}} className= {todoItem.completed ? "completed" : "uncompleted"}>
            <span className= {todoItem.completed ? "completed" : "uncompleted"}></span>
            {todoItem.todo} 
        </li>
        /* <span class="donttouch">
        <button onClick= { () => {rimuovilo(Id)}}>Rimuovimi</button>
        <button onClick= { () => localStorage.clear()}>Pulisci </button>
        </span> */
        /* </div> */
    );
}
