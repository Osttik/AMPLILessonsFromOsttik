import { useState } from 'react';


function ToDoList(props) {
    return (
        <div className="toDoList">
            <div>{props.name}</div>
            <div>
            {
                props.cards.map(item => (
                    <div>{item.text}</div>
                ))
            }
            </div>
        </div>
    );
}

export default ToDoList;
