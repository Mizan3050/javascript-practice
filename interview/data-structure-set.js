// Set
// Set objects are collections of values. A value in the set may only occur once; it is unique in the set's collection.

// Set composition
// The Set object provides some methods that allow you to compose sets like you would with mathematical operations.

const mySet1 = new Set();

mySet1.add(1); // Set(1) { 1 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add("some text"); // Set(3) { 1, 5, 'some text' }
const o = { a: 1, b: 2 };
mySet1.add(o);

mySet1.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay

// 'has' method of Set returns true if the value exists in the Set
// 'delete' method of removed the specified value from the set in it exists
mySet1.delete(8)

// iterating through Sets 
for(value of mySet1){
    // console.log(value);
}

// convert set to Array

// console.log(Array.from(mySet1))

// converting between Set and Array
const mySet2 = new Set([1, 2, 3, 4]);
console.log(mySet2.size); // 4
console.log([...mySet2]); // [1, 2, 3, 4]

// intersect can be simulated via
const intersection = new Set([...mySet1].filter((x) => mySet2.has(x)));

// difference can be simulated via
const difference = new Set([...mySet1].filter((x) => !mySet2.has(x)));

// Use to remove duplicate elements from an array
const numbers = [2, 13, 4, 4, 2, 13, 13, 4, 4, 5, 5, 6, 6, 7, 5, 32, 13, 4, 5];
console.log([...new Set(numbers)]); // [2, 13, 4, 5, 6, 7, 32]