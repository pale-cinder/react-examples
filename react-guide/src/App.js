import React, { useState, Component } from "react";
import Radium, { StyleRoot } from "radium";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

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
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    let persons = null; //by default the var is null
    // but if the state person is true -->
    if (this.state.showPersons) {
      persons = (
        <div>
          {/* take elements and pass to the method, so we have an array of elements of java script objects  */}
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                // add a key property to speed up rendering, to find out which element changed and which didnt
                // it will render only what was changed
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "yellow",
        color: "black"
      };
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
      <StyleRoot>
        <div className="App">
          <p className={fontClass.join(" ")}>Hello world!</p>

          <button style={style} onClick={() => this.togglePersonHandler()}>
            Toggle
          </button>
          {/* output persons here */}
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
//this is statefull component
