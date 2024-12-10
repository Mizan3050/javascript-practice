const newMap = new Map();

newMap.set("meezan", { name: "Meezan", age: 25 });
newMap.set("namira", { name: "Namira", age: 21 });
newMap.set("faizan", { name: "Faizan", age: 24 });
newMap.set("saniya", { name: "Saniya", age: 28 });
newMap.set("arshad", { name: "Arshad", age: 31 });

(function () {
  for ([key, value] of newMap) {
    console.log(key, value);
  }
})();

// IIFE - An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

// Map is a data structure that gaurantees the order of the keys, it holds key value pairs where both keys and values can have any data type
// Map is iterable by for of loop and foreach loop
// Key has to be be unique
// Value equality is based on the SameValueZero algorithm. (It used to use SameValue, which treated 0 and -0 as different.

// Direct Conversion to Objects or Arrays:
const obj = Object.fromEntries(newMap);
console.log(obj);

//Convert Map to Array
const arr = [...newMap];
console.log(arr);

// Chaining
const map = newMap.set("a", 1).set("b", 2).set("c", 3);

//Custom this for forEach:
//When using forEach, you can specify a custom this context:
const arrMap = new Map([
  ["name", "Alice"],
  ["age", 25],
]);

const obj2 = { prefix: "Value: " };
arrMap.forEach(function (value, key) {
  console.log(this.prefix + value);
}, obj2);
