import React, {Component} from 'react';

export default function list({lists, addList, removeList}){
    console.log(lists);
    return (
        <div className="container">
            <h1>LISTS</h1>
            <ul className="lists">
                {
                    lists.map(list => <li key={list.id}> {list.name}</li>)
                }
            </ul>
        </div>
    )
}