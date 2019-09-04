# Export and Import (examples)

if: file person.js

```javascript
const person = {
    name: 'Max'
}
```

export default person
==> this is constant so ==> in app.js
```javascript
import person from './person.js'
import prs from './person.js'
```

if: file utility.js
export const clean = () => {}
export const baseData =10;
==> so in app.js it allows us specifically target things from the file
```javascript
import { baseData } from '.utility.js'
import { clean } from '.utility.js'
```
== this is named exports

Named import also are:
```javascript
import { smt as Smt } from './utility.js'
import * as bundled from '.utility.js'
```
