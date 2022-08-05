const _ = require('../methods/lodash')

//chunk by 1 element
test("_.chunk(['a', 'b', 'c', 'd', 'e'], 1) to equal [['a'], ['b'], ['c'], ['d'], ['e']]", () => {
  expect(_.chunk(['a', 'b', 'c', 'd', 'e'], 1)).toEqual([
    ['a'],
    ['b'],
    ['c'],
    ['d'],
    ['e'],
  ])
})

//chunk by 2 elements
test("_.chunk(['a', 'b', 'c', 'd', 'e'], 2) to equal [['a', 'b'], ['c', 'd'], ['e']]", () => {
  expect(_.chunk(['a', 'b', 'c', 'd', 'e'], 2)).toEqual([
    ['a', 'b'],
    ['c', 'd'],
    ['e'],
  ])
})

//chunk by 3 elements
test("_.chunk(['a', 'b', 'c', 'd', 'e'], 3) to equal [['a', 'b', 'c'], ['d', 'e']]", () => {
  expect(_.chunk(['a', 'b', 'c', 'd', 'e'], 3)).toEqual([
    ['a', 'b', 'c'],
    ['d', 'e'],
  ])
})

//chunk by 4 elements
test("_.chunk(['a', 'b', 'c', 'd', 'e'], 4 ) to equal [['a', 'b', 'c'], ['d', 'e']]", () => {
  expect(_.chunk(['a', 'b', 'c', 'd', 'e'], 3)).toEqual([
    ['a', 'b', 'c'],
    ['d', 'e'],
  ])
})

//chunk by "array.length" number of elements
test("_.chunk(['a', 'b', 'c', 'd', 'e'], 5 ) to equal [['a', 'b', 'c', 'd', 'e']]", () => {
  expect(_.chunk(['a', 'b', 'c', 'd', 'e'], 5)).toEqual([
    ['a', 'b', 'c', 'd', 'e'],
  ])
})

//call the function without the second argument
test("_.chunk(['a', 'b', 'c', 'd', 'e']) to equal [['a'], ['b'], ['c'], ['d'], ['e']]", () => {
  expect(_.chunk(['a', 'b', 'c', 'd', 'e'])).toEqual([
    ['a'],
    ['b'],
    ['c'],
    ['d'],
    ['e'],
  ])
})

//chunk an array of chunks
test('_.chunk([[1, 2, 3], [4, 5, 6, 7, 8], [9, 10, 1, 2]]) to equal [[[1, 2, 3], [4, 5, 6, 7, 8]], [[9, 10, 1, 2]]]', () => {
  let arr = [
    [1, 2, 3],
    [4, 5, 6, 7, 8],
    [9, 10, 1, 2],
  ]

  expect(_.chunk(arr, 2)).toEqual([
    [
      [1, 2, 3],
      [4, 5, 6, 7, 8],
    ],
    [[9, 10, 1, 2]],
  ])
})

//chunk an array of objects
test('_.chunk([{ a: 1, b: 2, c: 3 }, { d: 1, e: 2, f: 3 }, { d: 1, e: 2, f: 3 }])[0] to equal [{ a: 1, b: 2, c: 3 }]', () => {
  let arr = [
    { a: 1, b: 2, c: 3 },
    { d: 1, e: 2, f: 3 },
    { d: 1, e: 2, f: 3 },
  ]

  expect(_.chunk(arr, 1)[0]).toEqual([{ a: 1, b: 2, c: 3 }])
})
