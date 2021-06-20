import { useState } from 'react';
import Chat from './components/chat/Chat';
import Header from './components/header/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Chat />
    </div>
  );
}

export default App;
