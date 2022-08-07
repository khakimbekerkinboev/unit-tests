const _ = require('../methods/lodash')

//call the function without the second argument
test('_.dropWhile([1, 2, 3, 4, 5, 6, 7]) to equal []', () => {
  expect(_.dropWhile([1, 2, 3, 4, 5, 6, 7])).toEqual([])
})

// simple test
test('_.dropWhile([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], (e) => e < 5) to eqaul [5, 6, 7, 8 ,9]', () => {
  expect(_.dropWhile([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], (e) => e < 5)).toEqual([
    5, 6, 7, 8, 9,
  ])
})

// simple test
test('_.dropWhile([1, 3, 4, 5, 5, 6], (e) => {return e != 5}) to equal [5, 5, 6]', () => {
  expect(
    _.dropWhile([1, 3, 4, 5, 5, 6], (e) => {
      return e != 5
    })
  ).toEqual([5, 5, 6])
})

// test with falsy values
test('_.dropWhile([1, 2, 3, 0, 4, 5, 6], (e) => e) to eqaul [0, 4, 5, 6]', () => {
  expect(_.dropWhile([1, 2, 3, 0, 4, 5, 6], (e) => e)).toEqual([0, 4, 5, 6])
})

// test with falsy values
test('_.dropWhile([1, 2, 3, undefined, 4, 5, 6], (e) => e) to eqaul [undefined, 4, 5, 6]', () => {
  expect(_.dropWhile([1, 2, 3, undefined, 4, 5, 6], (e) => e)).toEqual([
    undefined,
    4,
    5,
    6,
  ])
})

// test with falsy values
test('_.dropWhile([1, 2, 3, false, 4, 5, 6], (e) => e) to eqaul [false, 4, 5, 6]', () => {
  expect(_.dropWhile([1, 2, 3, false, 4, 5, 6], (e) => e)).toEqual([
    false,
    4,
    5,
    6,
  ])
})

// test with falsy values
test('_.dropWhile([1, 2, 3, null, 4, 5, 6], (e) => e) to eqaul [null, 4, 5, 6]', () => {
  expect(_.dropWhile([1, 2, 3, null, 4, 5, 6], (e) => e)).toEqual([
    null,
    4,
    5,
    6,
  ])
})

// test with falsy values
test('_.dropWhile([1, 2, 3, NaN, 4, 5, 6], (e) => e) to eqaul [NaN, 4, 5, 6]', () => {
  expect(_.dropWhile([1, 2, 3, NaN, 4, 5, 6], (e) => e)).toEqual([NaN, 4, 5, 6])
})

// test with falsy values
test("_.dropWhile([1, 2, 3, '', 4, 5, 6], (e) => e) to eqaul ['', 4, 5, 6]", () => {
  expect(_.dropWhile([1, 2, 3, '', 4, 5, 6], (e) => e)).toEqual(['', 4, 5, 6])
})

// test with truthy values
test('', () => {
  expect(
    _.dropWhile(
      [true, {}, [], 42, '0', 'false', -42, 3.14, -3.14, Infinity, -Infinity],
      (e) => e
    )
  ).toEqual([])
})

// test with an array of objects
test("_.dropWhile([{'a': 1, 'b': 2}, {'a': 2, 'b': 1}, {'b': 2}], (e) => {return e.b == 2}) to equal [{'a': 2, 'b': 1}, {'b': 2}]", () => {
  expect(
    _.dropWhile([{ a: 1, b: 2 }, { a: 2, b: 1 }, { b: 2 }], (e) => {
      return e.b == 2
    })
  ).toEqual([{ a: 2, b: 1 }, { b: 2 }])
})
