import React from 'react';
// import Radium from 'radium';
import './Person.css';

const person = (props) => {
    //{Math.floor(Math.random() * 28)} -- this is random age calculation
    //return <p>I'm {props.name} a Person :( and I am {Math.floor(Math.random() * 28)} years old</p>
    
    // const style = {
    //     '@media (min-width: 500px': {
    //         width: '450px'
    //     }
    // };
    
    return (
        //<div className="Person" style={style}>
        <div className={classes.Person}>
        {/* </div><div className="Person"  */}
             <p onClick={props.click}>I'm {props.name} a Person :( and I am {props.age} years old</p>
             <p>{props.children}</p>
             <input type="text" onChange={props.changed} value={props.name} />
        </div>
   
    )
};

//export default Radium(person);
export default person;