const _ = require('../methods/lodash')

//call the function without the second argument
test('_.filter([1, 2, 3, 4, 5]) to equal [1, 2, 3, 4, 5]', () => {
  expect(_.filter([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
})

//filter even numbers
test('_.filter([1, 2, 3, 4, 5, 6, 7, 8, 9], (v) => v % 2 === 0) to equal [2, 4, 6, 8]', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const isEven = (v) => v % 2 === 0

  expect(_.filter(arr, isEven)).toEqual([2, 4, 6, 8])
})

//filter odd numbers
test('_.filter([1, 2, 3, 4, 5, 6, 7, 8, 9], (v) => v % 2 === 1) to equal [1, 3, 5, 7, 9]', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const isOdd = (e) => e % 2 === 1

  expect(_.filter(arr, isOdd)).toEqual([1, 3, 5, 7, 9])
})

// filter truthy values
test("_.filter([null, false, 0, 'hello', '', NaN], (e) => e) to equal ['hello']", () => {
  const arr = [null, false, 0, 'hello', '', NaN]
  const isTruthy = (e) => e
  expect(_.filter(arr, isTruthy)).toEqual(['hello'])
})

// filter an array of objects
test("_.filter([{ user: 'barney', age: 36, active: true }, { user: 'fred',40 age: , active: false },]) to equal [{ user: 'fred',40 age: , active: false }]", () => {
  var users = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 40, active: false },
  ]
  expect(
    _.filter(users, function (o) {
      return !o.active
    })
  ).toEqual([{ user: 'fred', age: 40, active: false }])
})
