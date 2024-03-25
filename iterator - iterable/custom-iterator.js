/**
 * Symbol.iterator is a static data property that represent @@iterator
 * iterable protocol look for this symbol for the method and return iterator of an object
 * in order for an object to be iterable it must have @@iterator key
 * for eg
 */ 

const iterableOne = {};

iterableOne[Symbol.iterator] = function*() {
    yield 1;
    yield 2;
    yield 3;
}

for(let n of iterableOne){
    console.log(n)
}

const array = [1,2,3];
function createIterator(arr){
    let count = 0;
    return {
        next: function(){
            return count < arr.length ? {
                value: arr[count++],
                done: false
            } : {
                value: undefined,
                done: true
            }
        }
    }
}

const customIterator = createIterator(array);
console.log(customIterator.next());
console.log(customIterator.next());
console.log(customIterator.next());
console.log(customIterator.next());