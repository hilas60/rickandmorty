import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import MainView from './views/MainView';

function App() {
  return (
    <div className="App">
      <Header />
      <MainView />
    </div>
  );
}

export default App;
