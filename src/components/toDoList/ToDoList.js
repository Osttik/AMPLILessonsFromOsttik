import { useState } from 'react';
import ToDoListCard from '../toDoListCard/ToDoListCard';
import Popup from '../popup/Popup';

import './styles.css';

function ToDoList(props) {
    const [isOpen, setOpen] = useState(false)

    const handleOpenPopup = () => {
        setOpen(!isOpen)
    }

    return (
        <div className="toDoList">
            <div className="toDoListHeader">
                <div>{props.name}</div>
                <button onClick={handleOpenPopup}></button>
            </div>
            <div className="toDoListContent">
            {
                props.cards.map((item, id) => (
                    <ToDoListCard 
                        text={item.text}
                        columnId={props.columnId}
                        cardId={id}
                        moveRight={props.moveRigthCard}
                        moveLeft={props.moveLeftCard}
                    />
                ))
            }
            </div>
            { isOpen && <Popup /> }
        </div>
    );
}

export default ToDoList;
