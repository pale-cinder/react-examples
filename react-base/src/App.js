import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, I am a React App</h1>
        <p>This is something workable</p>

        <h1>Let's introduce ourselves!</h1>
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <h1>Let's talk!</h1>
        <Person name="Cinder" age="28"/>
        <Person name="Weak" age="29" >My hobbies: Coding</Person>
        <Person name="Albus" age="6"/>

      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am a React'));
  }
}

export default App;
