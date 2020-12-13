import React from 'react';
import Snake from 'snake-game-react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Snake 
        color1="#FFBC42"
        color2="#0496FF"
        backgroundColor="#8F2D56"
        />  
    </div>
  );
}

export default App;
