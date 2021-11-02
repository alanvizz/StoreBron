import React from 'react';
import './App.css';
import Navbar from './navbar/Navbar.js';
import ItemListContainer from './components/ItemListContainer';

function App() {  
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer/>
    </div>
  )
}

export default App;
