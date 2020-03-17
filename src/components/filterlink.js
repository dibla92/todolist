import React from 'react';

//Qualsiasi figlio che mettiamo in questo componente è catturato da children
const filterLink = ( {actionType, children} ) => {
    return (
        <a href="#"
        onClick = {(e) => {
            e.preventDefault();

        }}
        >
            {children}
        </a>
    )
};

export default filterLink;