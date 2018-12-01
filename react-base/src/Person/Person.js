import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
    //{Math.floor(Math.random() * 28)} -- this is random age calculation
    //return <p>I'm {props.name} a Person :( and I am {Math.floor(Math.random() * 28)} years old</p>
    return (
        <div className="Person">
             <p onClick={props.click}>I'm {props.name} a Person :( and I am {props.age} years old</p>
             <p>{props.children}</p>
             <input type="text" onChange={props.changed} value={props.name} />
        </div>
   
    )
};

export default Radium(person);