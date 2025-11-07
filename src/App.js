import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Journeys from './components/Journeys';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Journeys />
    </div>
  );
}

export default App;

