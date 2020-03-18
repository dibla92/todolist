import React from 'react';

//Qualsiasi figlio che mettiamo in questo componente è catturato da children
const filterLink = ( {onClickFilter, actionType, children} ) => {
    return (
        <a href="#"
        onClick = {(e) => {
            e.preventDefault();
            onClickFilter(actionType)

        }}
        >
            {children}
        </a>
    )
};

export default filterLink;