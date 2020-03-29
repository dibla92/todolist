import React from 'react'
import propTypes from 'prop-types'


export default function addTodoComponent ({addnew}) {
    let todoInput;
    return (
        <div className="addtodo">
            <input onKeyUp = {
                (evt) => {
                    if(+evt.keyCode === 13) {
                        addnew(todoInput.value);
                        todoInput.value = '';
                    }
                }
            }
            ref = { (node) => {todoInput = node}} />
            <button onClick = {
                () => {
                    addnew(todoInput.value);
                    todoInput.value = '';
                }
            }>Add</button>
        </div>
    )
}

addTodoComponent.propTypes = {
    addnew: propTypes.func.isRequired
}