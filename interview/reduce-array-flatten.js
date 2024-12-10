const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
function flattenArray(arrayToReduce) {
  const flat = arrayToReduce.reduce((acc, cumm) => {
    if (Array.isArray(cumm)) {
      acc = [...acc, ...flattenArray(cumm)];
    } else {
      acc = [...acc, cumm];
    }
    return acc;
  }, []);
  return flat
}

console.log(flattenArray(arr));
