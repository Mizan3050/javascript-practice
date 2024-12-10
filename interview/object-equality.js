const obj1 = {
  name: "Meezan",
  age: 25,
  address: {
    city: "Pune",
    state: {
      code: "12",
      name: "Maharashtra",
    },
  },
};

const obj2 = {
  name: "Meezan",
  age: 25,
  address: {
    city: "Pune",
    state: {
      code: "11",
      name: "Maharashtra",
    },
  },
};

function isObjectSame(object1, object2) {
  if (object1 === object2) {
    return true;
  }
  if (
    object1 === null ||
    object2 === null ||
    typeof object1 !== "object" ||
    typeof object2 !== "object"
  ) {
    return false;
  }
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  for (const key of keys1) {
    if (!keys2.includes(key) || !isObjectSame(object1[key], object2[key])) {
      return false;
    }
  }
  return true;
}

console.log(isObjectSame(obj1, obj2));
