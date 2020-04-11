import React from 'react'
import Errorboundary from '../components/errorboundary';
import AddNewTodo from './addnew'
import MyTodoList from './mytodolist'
import MyFooterContainer from './todofootercontainer'

export default function myTodos({match, location}){
    const listId = match.params.list || 0;
    const listName = location.state ? location.state.listName : null;
    const listTitle = listName ? <h3>{listName}</h3> : null;
    return(
        <div className="container">
            {listTitle}
            <AddNewTodo list={listId}/>
            <Errorboundary>
            <MyTodoList list={listId} />  
            </Errorboundary>
            {/* MyTodoList è il componente che avvolge il componente todolist che si occupa di mostrare i todos che sono
            immagazzinati nello store (forniti dal provider nell' index principale) */}
            <MyFooterContainer />
        </div>
    )
}