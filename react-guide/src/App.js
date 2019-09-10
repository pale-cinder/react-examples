import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

//function App() {
  class App extends Component {
  state = {
    persons: [
      { name: 'Harry', age: 18 },
      { name: 'Hermione', age: 17 },
      { name: 'Albus', age: 1 }
    ],
    otherState: 'something else'
  }
  
  switchHandler = () => {
    //this.state.persons[0].name = 'Potter';
    //console.log('clicked');
    this.setState( { //it will override the state but will not touch something that is not changed
      persons: [
      { name: 'Harry Potter', age: 18 },
      { name: 'Hermione', age: 17 },
      { name: 'Albus', age: 1 }
      ]
    } )
  }

  render(){
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <button onClick={this.switchHandler}>Switch Name</button>
      <Person name={this.state.persons[1].name} age="18" />
      <Person name={this.state.persons[0].name} age="17">My hobbies: Quidditch</Person>
      <Person name={this.state.persons[2].name} age="1" />
    </div>
  );
  }
  // nested React element
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello React works'));

}

export default App;
