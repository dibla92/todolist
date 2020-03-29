import React from 'react';
import propTypes from 'prop-types'

//Qualsiasi figlio che mettiamo in questo componente è catturato da children
const filterLink = ( props ) => {
    let {activeFilter, onClickFilter, actionType, children} = props;
    if(activeFilter == actionType)
        return children;
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

filterLink.propTypes = {
    props: propTypes.shape({
        activeFilter: propTypes.string.isRequired,
        onClickFilter: propTypes.func.isRequired,
        actionType: propTypes.string.isRequired,
        children: propTypes.element.isRequired
    })
}