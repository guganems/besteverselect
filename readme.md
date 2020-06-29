## Description

A plugin which converts HTML selectbox to searchable selectbox

## Using

add this script
```html
<script src="https://cdn.jsdelivr.net/gh/guganems/besteverselect/besteverselect.js"></script>
```

### Example

let's say you have the following selectbox

```html
<select name="" id="selectbox" class="selectbox">
        <option value="js">js</option>
        <option value="php">php</option>
        <option value="java">java</option>
        <option value="guga nems">guga nems</option>
</select>
```
use this script to convert it to searchable one:

```javascript
let select = new BestEverSelect('selectbox');
```