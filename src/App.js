import React from "react";
import Weather from "./Weather";


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
          Hello World!!!
        </h1>
        <Weather city="New York" />
      </header>
    </div>
  );
}

export default App;
