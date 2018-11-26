import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Cinder', age: 28 },
      { name: 'Weak', age: 29 },
      { name: 'Albus', age: 6 }
    ],
    otherState: 'some',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('was clicked');
    // (!!) Don't do this: this.state.persons[0].name = 'Pale';
    this.setState( { 
      persons: [
      { name: newName, age: 28 },
      { name: 'Weak', age: 29 },
      { name: 'Albus', age: 7 }
    ]
  })
  }

  nameChangeHandler = (event) => {
    this.setState( { 
      persons: [
      { name: 'Cinder', age: 28 },
      { name: event.target.value, age: 29 }, //dynamically call the event and update the field
      { name: 'Albus', age: 7 }
    ]
  })
  }

  togglePersonsHandler = () => {

  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
        <div className="App">
        <h1>Hello, I am a React App</h1>
        <p>This is something workable</p>

        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch name</button>

          { this.state.showPersons === true ? 
            <div>
              <h1>Let's introduce ourselves!</h1>

              <Person />
              <Person />
              <Person />
              <Person />
              <Person />

              <h1>Let's talk!</h1>

              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age} />
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age} 
                click={this.switchNameHandler.bind(this, 'Cinder-')} 
                changed={this.nameChangeHandler}>My hobbies: Coding</Person>
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age} />
            </div> : null
          }
        </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am a React'));
  }
}

export default App;
