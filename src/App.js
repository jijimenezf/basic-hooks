import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomInput from './components/CustomInput';
import CounterExample from './components/CounterExample';
import CustomReducer from './components/CustomReducer';
import Toggle from './components/Toggle';
import Card from './components/Card';
import AppContext from './components/context/AppContext';

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
      <CounterExample />
      <br/>
      <CustomReducer />
      <CustomInput />
      <br/>
      <Toggle />
      <br />
      <Card onSelect={(item) => console.log(item)} />
      <br />
      <AppContext />
    </div>
  );
}

export default App;
