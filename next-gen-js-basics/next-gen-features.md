# Next-Generation Features

var = let (is variable value ) & const (is constant value) 

### Arrow Function

```javascript
const myFunction = (list of arguments) => {
    Function Body
//where this.function is always keep the context and doesnt change it in a run time
}
```

Example: 

```javascript
const printMyName = (name, age) => {
    console.log(name, age);
}
printMyName('Max', '28');

//if:
const printMyName = name => {
    ...
   }
//this valid only if  one argument 

/if there is no arguments:
const printMyName = () => {
    ...
   }
printMyName();

//if all we have is to have a return function->
//no need to write the word return and the functions writes in one line
const multiply = (number) => number * 2;
console.log(multiply(2));
```