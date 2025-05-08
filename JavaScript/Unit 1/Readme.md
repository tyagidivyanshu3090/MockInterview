# # Commit 1: 💡 Concept Tested:

- Behavior of the arguments object in non-strict vs strict mode
- Parameter-argument linkage in JavaScript functions

### 🧐 Take Aways

- **arguments** is a special, array-like object that holds all the arguments passed to a non-arrow function. It is automatically available inside the function body. It is not available in arrow functions.
- In **strict mode**, arguments still exists but modifying it does not affect the named parameters (they are unlinked).
