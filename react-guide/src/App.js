import React, { useState, Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

//function App() {
// const App = props => {
//   const [ personsState, setPersonsState ] = useState({ //useState returns always two elements and only two elements
//     persons: [
//       { name: 'Harry', age: 18 },
//       { name: 'Hermione', age: 17 },
//       { name: 'Albus', age: 1 }
//     ],
//     otherState: 'something else'
//   });

//   const [otherState, setOtherState] = useState('something else');

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

  // const [otherState, setOtherState] = useState('something else');

  // const switchHandler = () => {
  //   //this.state.persons[0].name = 'Potter';
  //   //console.log('clicked');
  //   setPersonsState({ //it will override the state but will not touch something that is not changed
  //     persons: [
  //     { name: 'Harry Potter', age: 18 },
  //     { name: 'Hermione', age: 17 },
  //     { name: 'Albus', age: 1 }
  //     ],
  //   })
  // }

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
          <Person name={this.state.persons[1].name} age="18" />

          <Person name={this.state.persons[0].name} age="17">
            My hobbies: Quidditch
          </Person>

          <Person name={this.state.persons[2].name} age="1" />
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
