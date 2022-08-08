const _ = require('../methods/lodash')

// test without the second argument
test('_.includes([]) to be undefined', () => {
  expect(_.includes([])).toBe(undefined)
})

// test with the third argument
test('_.includes([1, 2, 3], 1, 2) to be false', () => {
  expect(_.includes([1, 2, 3], 1, 2)).toBe(false)
})

// test string
test("_.includes('thisisastring', 'string') to be true", () => {
  expect(_.includes('thisisastring', 'string')).toBe(true)
})

test("_.includes('thisisastring', 'notexist') to be false", () => {
  expect(_.includes('thisisastring', 'notexist')).toBe(false)
})

// test array
test('_.includes([1, 2, 3], 1) to be true', () => {
  expect(_.includes([1, 2, 3], 1)).toBe(true)
})

test('_.includes([1, 2, 3], 4) to be false', () => {
  expect(_.includes([1, 2, 3], 4)).toBe(false)
})

// test object
test('_.includes({a: 1, b: 2}, 2) to be true', () => {
  expect(_.includes({ a: 1, b: 2 }, 2)).toBe(true)
})

test('_.includes({a: 1, b: 2}, 3) to be false', () => {
  expect(_.includes({ a: 1, b: 2 }, 3)).toBe(false)
})
