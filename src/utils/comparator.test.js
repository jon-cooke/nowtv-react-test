import comparator from './comparator';

it('should export a function', () => {
  expect(comparator).toBeInstanceOf(Function);
});

it('when called the function should return a function', () => {
  expect(comparator()).toBeInstanceOf(Function);
});

const compareId = comparator('id');

describe('the returned comparison function', () => {
  it('should return 0 if both argumenst have equal id properties', () =>{
    const a = {
      id: 'is-the-same',
    };
    const b = a;
    expect(compareId(a, b)).toEqual(0);
  });

  it('should return -1 if the id property of a precedes the id property of b', () =>{
    const a = {
      id: 'a-is-first',
    };
    const b = {
      id: 'b-is-second',
    };
    expect(compareId(a, b)).toEqual(-1);
  });

  it('should return +1 if the id property of b precedes the id property of a', () =>{
    const a = {
      id: 'b-is-second',
    };
    const b = {
      id: 'a-is-first',
    };
    expect(compareId(a, b)).toEqual(1);
  });
});
