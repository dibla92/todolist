import React from 'react'
import propTypes from 'prop-types'


export default function addTodoComponent ({addnew, list}) {
    let todoInput;
    return (
        <div className="addtodo">
            <input onKeyUp = {
                (evt) => {
                    if(+evt.keyCode === 13) {
                        addnew(todoInput.value, list);
                        todoInput.value = '';
                    }
                }
            }
            ref = { (node) => {todoInput = node}} />
            <button onClick = {
                () => {
                    addnew(todoInput.value, list);
                    todoInput.value = '';
                }
            }>Add</button>
        </div>
    )
}

addTodoComponent.propTypes = {
    addnew: propTypes.func.isRequired
}