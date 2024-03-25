/**
 * A generator function is a function that can be exited and re-entered, with its context being saved across re-entrance!!
 */
// Creation of generator function
function* firstGeneratorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

// creating the generator function
// the function will not be executed by just calling the function
const generator = firstGeneratorFunction();
// you need to call .next() for the generator function to start accessing ghe yield values
console.log(generator.next());
// the generator.next() will return yield value and generator function status - {value: 1, done: true/false}
console.log(generator.next());
// if there is a return statement in the function, the function will be stopped there and value will store the return value, done flag will be set to true
// the generator function returns a GeneratorObject which is iterable
// no need to call next() since iterator implements the method next()
for (let n of firstGeneratorFunction()) {
  console.log(n);
}

function* createSquareNumberSeries(max) {
  let n = 0;
  while (n < max) {
    n++;
    yield n * n;
  }
}

for (let n of createSquareNumberSeries(10)) {
  console.log(n);
}
