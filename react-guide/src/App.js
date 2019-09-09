import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Person name="Albus" age="1" />
      <Person name="Harry" age="18">My hobbies: Quidditch</Person>
      <Person name="Hermiona" age="16" />
    </div>
  );

  // nested React element
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello React works'));

}

export default App;
