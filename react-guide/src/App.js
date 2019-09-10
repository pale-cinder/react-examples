import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

//function App() {
  const App = props => {
    const [ personsState, setPersonsState ] = useState({ //useState returns always two elements and only two elements
      persons: [
        { name: 'Harry', age: 18 },
        { name: 'Hermione', age: 17 },
        { name: 'Albus', age: 1 }
      ],
      otherState: 'something else'
    });

    const [otherState, setOtherState] = useState('something else');

    const switchHandler = () => {
      //this.state.persons[0].name = 'Potter';
      //console.log('clicked');
      setPersonsState({ //it will override the state but will not touch something that is not changed
        persons: [
        { name: 'Harry Potter', age: 18 },
        { name: 'Hermione', age: 17 },
        { name: 'Albus', age: 1 }
        ],
      })
    }
    
  
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <button onClick={switchHandler}>Switch Name</button>
      <Person 
        name={personsState.persons[1].name}  
        age="18" />

      <Person 
        name={personsState.persons[0].name} 
        age="17">
        My hobbies: Quidditch
      </Person>

      <Person 
        name={personsState.persons[2].name} 
        age="1" />

    </div>
  );
}

export default App;