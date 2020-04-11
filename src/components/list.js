import React from 'react';
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function list({listItem, removeList}) {
    return(
        <li>
            <Link to={{
                pathname: '/lists/'+ listItem.id + '/todos',
                state: {
                    listName: listItem.name
                }
                }}>
            {listItem.name} 
            </Link>
            <span className="cross" onClick= { (evt) => {
                    evt.stopPropagation();
                    removeList(listItem.id)
                }
            }></span>
        </li>
    );
}


// todo.propTypes = {
//     todoItem: propTypes.shape({
//         completed: propTypes.bool,
//         todo: propTypes.string,
//         id: propTypes.number
//     }),
//     toggleTodo: propTypes.func.isRequired,
//     id: propTypes.number,
//     removeTodo: propTypes.func.isRequired
// }
