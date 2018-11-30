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

  // switchNameHandler = (newName) => {
  //   //console.log('was clicked');
  //   // (!!) Don't do this: this.state.persons[0].name = 'Pale';
  //   this.setState( { 
  //     persons: [
  //     { name: newName, age: 28 },
  //     { name: 'Weak', age: 29 },
  //     { name: 'Albus', age: 7 }
  //   ]
  // })
  // }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id ===id;
    });

    const person = { 
      //spread operator
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} )

  //     { 
  //     persons: [
  //     { id: 'fdfsf4', name: 'Cinder', age: 28 },
  //     { id: 'adg43', name: event.target.value, age: 29 }, //dynamically call the event and update the field
  //     { id: 'dfrgt4', name: 'Albus', age: 7 }
  //   ]
  // }
  // )
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.slice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age} 
            key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
              {/* <h1>Let's introduce ourselves!</h1>

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
                age={this.state.persons[2].age} /> */}
            </div> 
      )
    }

    return (
        <div className="App">
        <h1>Hello, I am a React App</h1>
        <p>This is something workable</p>

        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}          
        </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am a React'));
  }
}

export default App;
