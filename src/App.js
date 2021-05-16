import { useState } from 'react';
import Header from './components/header/Header';
import ToDoList from './components/toDoList/ToDoList';
import './App.css';


function App() {
  const [toDoList, changeList] = useState([
    {
      name: "To do",
      cards: [
        {
          text: "Do home work"
        },
        {
          text: "Do house work"
        }
      ]
    }, 
    {
      name: "In progress",
      cards: [
        {
          text: "Learn React"
        }
      ]
    }, 
    {
      name: "Done",
      cards: [
        {
          text: "Breath"
        },
        {
          text: "Live"
        }
      ]
    }
  ]);

  const handleMoveCardRight = (columnId, cardId) => {
    if (columnId + 1 === toDoList.length)
      return;
      
    const nextColumnId = columnId + 1;
    handleMoveCard(columnId, nextColumnId, cardId)
  }

  const handleMoveCardLeft = (columnId, cardId) => {
    if (columnId === 0)
      return;

    const nextColumnId = columnId - 1;
    handleMoveCard(columnId, nextColumnId, cardId)
  }

  const handleMoveCard = (columnId, nextColumnId, cardId) => {
    const toDoListCopy = [...toDoList]
    const card = toDoListCopy[columnId].cards.splice(cardId, 1);
    
    toDoListCopy[nextColumnId].cards.push(card[0]);

    changeList(toDoListCopy)
  }

  const handleAddCard = (columnId, text) => {
    const toDoListCopy = [...toDoList]
    const card = {
      text: text
    }

    toDoListCopy[columnId].cards.push(card)

    changeList(toDoListCopy)
  }

  return (
    <div className="App">
      <Header />
      <div className="content">
        {
          toDoList.map((item, id) => (
            <ToDoList 
              name={item.name}
              cards={item.cards}
              columnId={id}
              moveRigthCard={handleMoveCardRight}
              moveLeftCard={handleMoveCardLeft}
              addCard={handleAddCard}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
