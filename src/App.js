import React from 'react';
import './App.css';
import TokenGenerator from './Containers/TokenGenerator';
import Header from './Components/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <TokenGenerator/>
    </div>
  );
}

export default App;
