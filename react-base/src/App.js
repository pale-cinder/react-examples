import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Cinder', age: 28 },
      { name: 'Weak', age: 29 },
      { name: 'Albus', age: 6 }
    ]
  }

  render() {
    return (
        <div className="App">
        <h1>Hello, I am a React App</h1>
        <p>This is something workable</p>
        <button>Switch name</button>
        <h1>Let's introduce ourselves!</h1>

        <Person />
        <Person />
        <Person />
        <Person />
        <Person />

        <h1>Let's talk!</h1>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My hobbies: Coding</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am a React'));
  }
}

export default App;
