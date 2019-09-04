# Classes, Properties, Methods

```javascript
class Person {
    //property
        name = 'Max'
    //method 
        call = () => {...}
}

//inheritance
class Person expends Master
```

Example:
```javascript
//with inheriting
class Human {
    constructor() {
        this.gender = 'male';
    }
    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor () {
        super(); //for executing the parent constructor to
        this.name = 'Max';
    }

    printMyName() {
        console.log(this.name);
    }
}
const person = new Person(); //storing the instances 
person.printMyName(); //execute
person.printGender();
```

#### ES6 properties:
```javascript
constructor () {
    this.myProperty = 'value'
}
```

#### ES7 properties (new way):
```javascript
myProperty = 'value'
```

#### ES6 methods:
```javascript
myMethod () {...}
``` 

#### ES7 methods (new way):
```javascript
myMethod = () => {...}
```
