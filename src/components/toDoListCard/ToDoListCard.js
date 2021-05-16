import { useState } from 'react';

import './styles.css';

function ToDoListCard(props) {
    return (
        <div className="toDoListCard">
            <button 
                className="cardButton"
                onClick={() => props.moveLeft(props.columnId, props.cardId)}
            >
                <svg className="cardArrowIcon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" tabindex="-1" title="ChevronLeft" data-ga-event-category="material-icons" data-ga-event-action="click" data-ga-event-label="ChevronLeft"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>
            </button>
            <div className="cardText">{props.text}</div>
            <button
                className="cardButton"
                onClick={() => props.moveRight(props.columnId, props.cardId)}
            >
                <svg className="cardArrowIcon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" tabindex="-1" title="ChevronRight" data-ga-event-category="material-icons" data-ga-event-action="click" data-ga-event-label="ChevronRight"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
            </button>
        </div>
    );
}

export default ToDoListCard;
