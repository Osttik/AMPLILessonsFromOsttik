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

  return (
    <div className="App">
      <Header />
      <div className="content">
        {
          toDoList.map(item => (
            <ToDoList 
              name={item.name}
              cards={item.cards}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
