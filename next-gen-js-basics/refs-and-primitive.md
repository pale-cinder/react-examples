# Reference and Primitive Types Refresher

Numbers, strings, booleans are primitive types.Whenever your reassign the value it creates a copy of value.
```javascript
const number = 1;
const num2 = number;

console.log(num2);
```

Objects and arrays are reference types.
```javascript
const person = {
    name: 'Albus'
};

const secondPerson = person;
person.name = 'Albus Dumbledore';
console.log(secondPerson);
//The result is: Albus Dumbledore
```
Here, stores the pointer to the place in memory, and when assigned person to the secondPerson (secondPerson = person) that pointer would be copied. 
If reassign reference type it copies the pointer not a value.

If: 
```javascript
const person = {
    name: 'Albus'
};

const secondPerson = {
    ...person
};
person.name = 'Albus Dumbledore';
console.log(secondPerson);
//The result is: Albus 
```