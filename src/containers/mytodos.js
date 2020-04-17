import React from 'react'
import Errorboundary from '../components/errorboundary';
import AddNewTodo from './addnew'
import MyTodoList from './mytodolist'
import MyFooterContainer from './todofootercontainer'

const parseFilter = (search) => {
    if(search.indexOf('filter')===-1)
        return '';
    const tokens = search.split('=');
    return tokens[1];
}
export default function myTodos({match, location}){
    const filterValue = parseFilter(location.search);
    const listId = match.params.list || 1;
    const listName = location.state ? location.state.listName : null;
    const listTitle = listName ? <h3>{listName}</h3> : null;
    return(
        <div className="container">
            {listTitle}
            <AddNewTodo list={listId}/>
            <Errorboundary>
            <MyTodoList list={listId} filter={filterValue} />  
            </Errorboundary>
            {/* MyTodoList è il componente che avvolge il componente todolist che si occupa di mostrare i todos che sono
            immagazzinati nello store (forniti dal provider nell' index principale) */}
            <MyFooterContainer  filter={filterValue} />
        </div>
    )
}