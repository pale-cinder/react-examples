            --------HTML
# html 
```html
<div id="p1"></div>

<div class="person">
    <h1>Manu</h1>
    <p>Age:29</p>
</div>
```

2.---
<div id="p1"></div>

<div id="p2"></div>


3.---
<div id="app"></div>

```

# css
 ```css           
.person {
    display: ....
}
```

# js
```js          
1. ---
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

2. ---
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

3. ---
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
