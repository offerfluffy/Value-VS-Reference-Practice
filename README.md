
# JavaScript: Primitives vs Objects and References

## ✅ Key Concepts Reviewed

### 1. Primitives vs Objects
- **Primitives** (like numbers, strings) are stored **by value**.
- **Objects** (like arrays, functions) are stored **by reference**.

### 2. Equality with Primitives
```js
let a = 1;
let b = 1;
console.log(a === b); // true
```
Primitives with the same value are equal.

### 3. Equality with Objects
```js
let a = {};
let b = {};
console.log(a === b); // false
```
Different objects, even if identical in structure, live at different memory addresses.

### 4. Function Parameter Behavior
```js
let age = 10;

function incrementAge(age) {
  age += 1;
}
incrementAge(age);
console.log(age); // 10 (unchanged — primitive passed by value)
```

```js
age = { age: 10 };
function incrementAge(age) {
  age.age += 1;
}
incrementAge(age);
console.log(age); // { age: 11 } (changed — object passed by reference)
```

### 5. Assignment and Mutability
```js
let a = { name: "a" };
let b = a;

a.name = "b";
console.log(b.name); // "b" — same reference

a = { name: "c" };
console.log(b.name); // "b" — b still references the old object
```

## 💡 Tips
- Use `const` if the reference shouldn't change.
- Use deep cloning (`structuredClone`, `JSON.parse(JSON.stringify(obj))`, or libraries like `lodash.cloneDeep`) when you want to copy an object by value.
