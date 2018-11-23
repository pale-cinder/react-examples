import React from 'react';

const person = (props) => {
    //{Math.floor(Math.random() * 28)} -- this is random age calculation
    //return <p>I'm {props.name} a Person :( and I am {Math.floor(Math.random() * 28)} years old</p>
    return (
        <div>
             <p>I'm {props.name} a Person :( and I am {props.age} years old</p>
             <p>{props.children}</p>
        </div>
   
    )
};

export default person;