# 💡 Commit 1: Concept Tested:

- Behavior of the arguments object in non-strict vs strict mode
- Parameter-argument linkage in JavaScript functions

### 🧐 Take Aways

- **arguments** is a special, array-like object that holds all the arguments passed to a non-arrow function. It is automatically available inside the function body. It is not available in arrow functions.
- In **strict mode**, arguments still exists but modifying it does not affect the named parameters (they are unlinked).

# 💡 Commit 2: Empty slot and Undefined in array

- **Empty items** = no value ever assigned.
- **undefined** = value has been explicitly set.

# 💡 Commit 3: Understanding the map, fiter and reduce function

- **map function** create the new array: not modifying the original array

  - callback function used in the map function must alter the passed array

- **filter function:** has the same syntax as the map and values which pass the condition are stored to new array and rest are removed.

  - callback function used in the filter function must return true or false

- 🧐 **Reduce function**
  - Same syntax as map but
  - callBack function takes 2 param: `accumulator and currentValue`

```jsx
array.reduce(callback, initialValue);
```
