# HTML

### 1.

```html
<div id="p1"></div>

<div class="person">
    <h1>Manu</h1>
    <p>Age:29</p>
</div>
```

### 2.

```html
<div id="p1"></div>

<div id="p2"></div>
```

### 3.
```html
<div id="app"></div>
```

# CSS

 ```css           
.person {
    display: ....
}
```

# JS

### 1.

```js          
function Person {
        return(
            <div class="person">
                <h1>Max</h1>
                <p>Age:28</p>
            </div>
        );
}

ReactDOM.render(<Person />, 
                document.querySelector('#p1'));
```

### 2.

```js
function Person(props) {
        return(
            <div class="person">
                <h1>{props.name}</h1>
                <p>Age: {props.age}</p>
            </div>
        );
}

ReactDOM.render(<Person name="Max" age="28"/>, 
                document.querySelector('#p1'));

ReactDOM.render(<Person name="Manu" age="29"/>, 
                document.querySelector('#p2'));
```

### 3.

```js
function Person(props) {
        return(
            <div class="person">
                <h1>{props.name}</h1>
                <p>Age: {props.age}</p>
            </div>
        );
}

//adding variables so there is no need to rewrite the same code again in ReactDOM
var app = (
    <div>
        //adding two componets usages variables here
        <Person name="Max" age="28"/>
        <Person name="Manu" age="29"/>
    </div>
);

ReactDOM.render(app, 
                document.querySelector('#app'));

```
