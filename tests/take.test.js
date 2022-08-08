const _ = require('../methods/lodash')

//call the function without the second argument
test('_.take([1, 2, 3]) to equal [1]', () => {
  expect(_.take([1, 2, 3])).toEqual([1])
})

//simple test
test('_.take([1, 2, 3], 2) to equal [1, 2]', () => {
  expect(_.take([1, 2, 3], 2)).toEqual([1, 2])
})

//simple test
test("_.take([{'name': 'lodash'}, {'name': 'npm'}, {'name': 'nodejs'}], 2) to equal [{name: 'lodash'}, {name: 'npm'}]", () => {
  expect(
    _.take([{ name: 'lodash' }, { name: 'npm' }, { name: 'nodejs' }], 2)
  ).toEqual([{ name: 'lodash' }, { name: 'npm' }])
})

//take more than 'array.length' elements
test('_.take([1, 2, 3], 5) to equal [1, 2, 3]', () => {
  expect(_.take([1, 2, 3], 5)).toEqual([1, 2, 3])
})

//take 0 elements
test('_.take([1, 2, 3], 0) to equal []', () => {
  expect(_.take([1, 2, 3], 0)).toEqual([])
})
