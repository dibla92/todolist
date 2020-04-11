import React from 'react';
import lists from '../components/lists';
import {addList, removeList, getLists} from '../actions/lists'
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        lists: state.lists
    }
}


    const methods = {
        addList : addList,
        removeList : removeList
    }
    
    const myConnect = connect(mapStateToProps, methods)  // serve ad abbonarsi allo store che è nell' index, in sostanza primo parametro per passare parametri secondo per passare i metodi da dispatchare
    const MyTodoLists = myConnect(lists);
    
    export default MyTodoLists;
