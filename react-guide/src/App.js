import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Person />
    </div>
  );

  // nested React element
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello React works'));

}

export default App;
