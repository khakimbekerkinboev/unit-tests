const _ = require('../methods/lodash')

//call the function without the second argument
test("_.drop([1, 2, 3, 4, 5, 'a', 'b', 'c']) to equal [2, 3, 4, 5, 'a', 'b', 'c']", () => {
  expect(_.drop([1, 2, 3, 4, 5, 'a', 'b', 'c'])).toEqual([
    2,
    3,
    4,
    5,
    'a',
    'b',
    'c',
  ])
})

//drop 0 elements
test("_.drop([1, 2, 3, 4, 5, 'a', 'b', 'c'], 0) to equal [1, 2, 3, 4, 5, 'a', 'b', 'c']", () => {
  expect(_.drop([1, 2, 3, 4, 5, 'a', 'b', 'c'], 0)).toEqual([
    1,
    2,
    3,
    4,
    5,
    'a',
    'b',
    'c',
  ])
})

//drop 1 elements
test("_.drop([1, 2, 3, 4, 5, 'a', 'b', 'c'], 1) to equal [2, 3, 4, 5, 'a', 'b', 'c']", () => {
  expect(_.drop([1, 2, 3, 4, 5, 'a', 'b', 'c'], 1)).toEqual([
    2,
    3,
    4,
    5,
    'a',
    'b',
    'c',
  ])
})

//drop 2 elements
test("_.drop([1, 2, 3, 4, 5, 'a', 'b', 'c'], 2) to equal [3, 4, 5, 'a', 'b', 'c']", () => {
  expect(_.drop([1, 2, 3, 4, 5, 'a', 'b', 'c'], 2)).toEqual([
    3,
    4,
    5,
    'a',
    'b',
    'c',
  ])
})

//drop 5 elements
test("_.drop([1, 2, 3, 4, 5, 'a', 'b', 'c'], 5) to equal ['a', 'b', 'c']", () => {
  expect(_.drop([1, 2, 3, 4, 5, 'a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c'])
})

//drop "array.length" elements
test("_.drop([1, 2, 3, 4, 5, 'a', 'b', 'c'], 8) to equal []", () => {
  expect(_.drop([1, 2, 3, 4, 5, 'a', 'b', 'c'], 8)).toEqual([])
})

//drop "more than array.length" elements
test("_.drop([1, 2, 3, 4, 5, 'a', 'b', 'c'], 15) to equal []", () => {
  expect(_.drop([1, 2, 3, 4, 5, 'a', 'b', 'c'], 15)).toEqual([])
})
