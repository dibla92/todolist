import React, {Component} from 'react';
import List from './list';
import AddList from '../containers/addnewlist';

export default function lists({lists, addList, removeList}){
    console.log(lists);
    return (
        <div className="container">
            <h1>LISTS</h1>
            <AddList/>
            <ul className="lists">
                {
                    lists.map(list => <List key={list.id} listItem={list} removeList={removeList}> </List>)
                }
            </ul>
        </div>
    )
}