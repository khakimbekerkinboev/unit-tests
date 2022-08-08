const _ = require('../methods/lodash')

test(``, () => {
  expect(_.zip(['a', 'b', 'c'], [1, 2, 3], [true, false, true])).toEqual([
    ['a', 1, true],
    ['b', 2, false],
    ['c', 3, true],
  ])
})

test(`_.zip(['a', 'b'], [1, 2], [true, false]) to equal [
    ['a', 1, true],
    ['b', 2, false],
  ]`, () => {
  expect(_.zip(['a', 'b'], [1, 2], [true, false])).toEqual([
    ['a', 1, true],
    ['b', 2, false],
  ])
})

test(`_.zip(['a', true, 100], [[1, 2], 'string'], [{}]) to equal [
    ['a', [1, 2], {}],
    [true, 'string', null],
    [100, null, null],
  ]`, () => {
  expect(_.zip(['a', true, 100], [[1, 2], 'string'], [{}])).toEqual([
    ['a', [1, 2], {}],
    [true, 'string', null],
    [100, null, null],
  ])
})

test(`_.zip(['a'], [2, 3, 4], [true]) to equal [
    ['a', 2, true],
    [null, 3, null],
    [null, 4, null],
  ]`, () => {
  expect(_.zip(['a'], [2, 3, 4], [true])).toEqual([
    ['a', 2, true],
    [null, 3, null],
    [null, 4, null],
  ])
})

test(``, () => {
  expect(
    _.zip([2, 'a', [3, 4]], [1000, { a: 2 }], ['b', 200, [{}], {}])
  ).toEqual([
    [2, 1000, 'b'],
    [
      'a',
      {
        a: 2,
      },
      200,
    ],
    [[3, 4], null, [{}]],
    [null, null, {}],
  ])
})
