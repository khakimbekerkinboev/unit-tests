const _ = require('../methods/lodash')

// test without the second argument
test('_.map([1, 2, 3]) to equal [1, 2, 3]', () => {
  expect(_.map([1, 2, 3])).toEqual([1, 2, 3])
})

// test with array
test('_.map([1, 2, 3], (e) => e ** 2) to equal [1, 4, 9]', () => {
  expect(_.map([1, 2, 3], (e) => e ** 2)).toEqual([1, 4, 9])
})

test('_.map([1, 4, 9], (e) => Math.sqrt(e)) to equal [1, 2, 3]', () => {
  expect(_.map([1, 4, 9], (e) => Math.sqrt(e))).toEqual([1, 2, 3])
})

test("_.map(['a', 'aa', 'aaa'], (e) => e.length) to equal [1, 2, 3]", () => {
  expect(_.map(['a', 'aa', 'aaa'], (e) => e.length)).toEqual([1, 2, 3])
})

test(`_.map([
    { firstName: 'Will', lastName: 'Riker', rank: 'Commander' },
    { firstName: 'Beverly', lastName: 'Crusher', rank: 'Commander' },
    { firstName: 'Wesley', lastName: 'Crusher', rank: 'Ensign' },
  ], (e) => e.firstName) to equal ['Will', 'Beverly', 'Wesley']`, () => {
  const arr = [
    { firstName: 'Will', lastName: 'Riker', rank: 'Commander' },
    { firstName: 'Beverly', lastName: 'Crusher', rank: 'Commander' },
    { firstName: 'Wesley', lastName: 'Crusher', rank: 'Ensign' },
  ]

  expect(_.map(arr, (e) => e.firstName)).toEqual(['Will', 'Beverly', 'Wesley'])
})

// test with object
test('_.map({ a: 1, b: 2, c: 3 }, (e) => e ** 2) to equal [1, 4, 9]', () => {
  expect(_.map({ a: 1, b: 2, c: 3 }, (e) => e ** 2)).toEqual([1, 4, 9])
})

test('_.map({ x: 1, y: 4, z: 9}, (e) => Math.sqrt(e)) to equal [1, 2, 3]', () => {
  expect(_.map({ x: 1, y: 4, z: 9 }, (e) => Math.sqrt(e))).toEqual([1, 2, 3])
})
