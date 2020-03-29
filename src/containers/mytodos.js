import React from 'react'
import Errorboundary from '../components/errorboundary';
import AddNewTodo from './addnew'
import MyTodoList from './mytodolist'
import MyFooterContainer from './todofootercontainer'

export default function myTodos(){
    return(
        <div className="container">
            <AddNewTodo/>
            <Errorboundary>
            <MyTodoList />  
            </Errorboundary>
            {/* MyTodoList è il componente che avvolge il componente todolist che si occupa di mostrare i todos che sono
            immagazzinati nello store (forniti dal provider nell' index principale) */}
            <MyFooterContainer />
        </div>
    )
}