const _ = require('../methods/lodash')

//call the function without the second argument
test('_.find([1, 2, 3, 4, 5]) to equal 1', () => {
  expect(_.find([1, 2, 3, 4, 5])).toEqual(1)
})

//find the first even number
test('_.find([1, 2, 3, 4, 5, 6, 7, 8, 9], (v) => v % 2 === 0) to be 2', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const isEven = (v) => v % 2 === 0

  expect(_.find(arr, isEven)).toBe(2)
})

//find the first odd number
test('_.find([1, 2, 3, 4, 5, 6, 7, 8, 9], (v) => v % 2 === 1) to be 1', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const isOdd = (e) => e % 2 === 1

  expect(_.find(arr, isOdd)).toBe(1)
})

// find the first truthy value
test("_.find([null, false, 0, 'first', 2, '', NaN], (e) => e) to be ['hello']", () => {
  const arr = [null, false, 0, 'first', 2, '', NaN]
  const isTruthy = (e) => e
  expect(_.find(arr, isTruthy)).toBe('first')
})

// find the first "not existing" value
test('_.find([1, 2, 3, 4, 5], (e) => e > 5) to be undefined', () => {
  const arr = [1, 2, 3, 4, 5]
  expect(_.find(arr, (e) => e > 5)).toBe(undefined)
})

// find an array of objects
test("_.find([{ user: 'john', age: 25, active: false }, { user: 'barney', age: 36, active: true }, { user: 'fred', age 40: , active: false },], function(o) {return !o.active}) to equal { user: 'john', age: 25, active: false }", () => {
  var users = [
    { user: 'john', age: 25, active: false },
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 40, active: false },
  ]
  expect(
    _.find(users, function (o) {
      return !o.active
    })
  ).toEqual({ user: 'john', age: 25, active: false })
})
