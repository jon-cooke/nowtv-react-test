// return a function that compares two objects
// using the value of property 'p'
// it assumes that the property value always has the same type
// in the event of different types, b's property value
// is coerced to the type of a's value
// NOTE could be improved by passing a type coercion function

const comparator = p => (a, b) => {
  a = a[p];
  b = b[p];

  if (a < b) {
    return -1;
  }
  // here I want b to be coerced to a's type
  // eslint-disable-next-line eqeqeq
  if (a == b) {
    return 0;
  }
  return 1;
};

export default comparator;
