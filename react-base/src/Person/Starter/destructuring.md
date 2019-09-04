# Destructuring

Extract array elements or object properties and store them in variables

### Array Destructuring

```javascript
[a,b] = ['Hello', 'Max']
console.log(a) //Hello
console.log(b) //Max
```

### Object Destructuring

```javascript
{name} = ['Hello', 'Max']
console.log(a) //Hello
console.log(b) //undefined
```

### Examples: Array Destructuring

```javascript
const numbers = [1, 2, 3 ];
[num1, num2] = numbers;
console.log(num1, num2);
```
The result is: 1 2.

If: 
```javascript
const numbers = [1, 2, 3 ];
[num1, , num3] = numbers;
console.log(num1, num3);
```
The result is: 1 3.

