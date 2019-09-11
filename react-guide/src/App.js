import React, { useState, Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    //useState returns always two elements and only two elements
    persons: [
      { name: "Harry", age: 18 },
      { name: "Hermione", age: 17 },
      { name: "Albus", age: 1 }
    ],
    otherState: "something else",
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.splice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white"
    };

    let persons = null; //by default the var is null
    // but if the state person is true -->
    if (this.state.showPersons) {
      persons = (
        <div>
          {/* take elements and pass to the method, so we have an array of elements of java script objects  */}
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age} />
          })}

        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello world!</h1>

        <button style={style} onClick={() => this.togglePersonHandler()}>
          Switch Name
        </button>
        {/* output persons here */}
        {persons} 
      </div>
    );
  }
}

export default App;
//this is statefull component
