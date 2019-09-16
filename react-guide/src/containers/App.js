import React, { useState, Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Persons from "../components/Persons/Persons";

class App extends Component {
  state = {
    //useState returns always two elements and only two elements
    persons: [
      { id: "dfdd1", name: "Harry", age: 18 },
      { id: "g4g1", name: "Hermione", age: 17 },
      { id: "bfg1", name: "Albus", age: 1 }
    ],
    otherState: "something else",
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.splice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "#699012",
      color: "white",
      font: "inherit",
      border: "1px solid white",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null; //by default the var is null
    // but if the state person is true -->
    if (this.state.showPersons) {
      persons = (
        <div>
          {/* take elements and pass to the method, so we have an array of elements of java script objects  */}
          <Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      );

      style.backgroundColor = "red";
    }

    let fontClass = [];
    if (this.state.persons.length <= 2) {
      fontClass.push("color"); // class = ['color']
    }
    if (this.state.persons.length <= 1) {
      fontClass.push("bold");
    }
    if (this.state.persons.length == 0) {
      fontClass.push("backcolor");
    }

    return (
        <div className={classes.App}>
          {persons}
        </div>
    );
  }
}

export default App;
//this is statefull component
