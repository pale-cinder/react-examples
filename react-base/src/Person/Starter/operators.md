# Operators

### Spread                          

array of elements or object properties

Example:

```javascript
const newArray = [...oldArray, 1,2]
const newObject = { ...oldObject, newProp: 5 }
```

Usage for elements:

```javascript
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);
```

Usage for objects:

```javascript
const person = {
    name: 'Max'
};
const newPerson = {
    ...person,
    age:28
}
console.log(newPerson);
```

### Rest

used to merge a list of function arguments into an array

Example:

```javascript
function sortArts(...args) {
    return args.sort()
}
```

Usage for arguments:

```javascript
const filter = (...args) => {
    return args.filter(el => el === 1);
}
console.log(filter(1, 2, 3));
```