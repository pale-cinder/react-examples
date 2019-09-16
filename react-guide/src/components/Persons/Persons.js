import React from 'react';
import Person from './Person/Person';

const persons = (props) => 
    props.persons.map((person, index) => {
        return ( <Person
            click={() => props.clicked(index)}
            name={person.name}
            age={person.age}
            // add a key property to speed up rendering, to find out which element changed and which didnt
            // it will render only what was changed
            key={person.id}
            changed={(event) => props.changed(event, person.id)}
          />
        );
      }
);

export default persons;