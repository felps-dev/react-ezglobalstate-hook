# React-GlobalState-Hook

A reactive state with localstorage and SWR

## Reference

`npm i --save react-globalstate-hook`  
or  
`yarn add react-globalstate-hook`

```javascript
import {
    useGlobalState,
    setGlobalState
} from 'react-globalstate-hook';
```
### useGlobalState(key: string, initialValue: any):
#
```javascript
const myState = useGlobalState("unique_key", "default");
```  

### setGlobalState(key: string, value: any):
#
```javascript
setGlobalState("unique_key", "value");
```
## Example

```javascript
import {
    useGlobalState,
    setGlobalState
} from 'react-globalstate-hook';

export default function Component(){
    //Is this case, Hello World is the primary value if we
    //never had stored this value before.
    const myState = useGlobalState("myState", "Hello World");

    function handleChange(){
        setGlobalState("myState", "Good Bye World");
    }

    return (
        <div>
            <span>{`Actual value for myState is: ${myState}`}</span>
            <button onClick={handleChange}>Increment</button>
            <DecrementButton />
        </div>
    )
}

```

License
----

MIT
