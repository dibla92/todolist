import React from 'react';
import propTypes from 'prop-types'

export default function todo({todoItem, toggleTodo, Id, removeTodo}) {
    //  in realtà il onClick chiamerà questo dispatch(toggleTodo(id)). infatti nel todolist il parametro onClick in firma è removeTodo
    return(
        <li  onClick={ () => {toggleTodo(todoItem, !todoItem.completed)}} className= {todoItem.completed ? "completed" : "uncompleted"}>
            <span className= {todoItem.completed ? "completed" : "uncompleted"}></span>
            {todoItem.todo} 
            <span className="cross" onClick= { (evt) => {
                    evt.stopPropagation();
                    removeTodo(Id)
                }
            }></span>
        </li>
        /* <span class="donttouch">
        <button onClick= { () => {rimuovilo(Id)}}>Rimuovimi</button>
        <button onClick= { () => localStorage.clear()}>Pulisci </button>
        </span> */
        /* </div> */
    );
}


todo.propTypes = {
    todoItem: propTypes.shape({
        completed: propTypes.bool,
        todo: propTypes.string,
        id: propTypes.number
    }),
    toggleTodo: propTypes.func.isRequired,
    id: propTypes.number,
    removeTodo: propTypes.func.isRequired
}
