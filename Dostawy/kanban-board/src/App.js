import logo from './logo.svg';
import './App.css';
import React from 'react';

import Column from './


import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Column title="Do zrobienia" />
        <Column title="W trakcie" />
        <Column title="Zrobione" />
      </DndProvider>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <h1>Kanban Board</h1>
    </div>
  );
}

export default App;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
