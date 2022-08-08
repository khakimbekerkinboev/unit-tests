const _ = require('../methods/lodash')

//test only "falsy" values
test("_.compact([false, null, 0, '', undefined]) to equal []", () => {
  expect(_.compact([false, null, 0, '', undefined])).toEqual([])
})

//test only "truthy" values
test("_.compact([true, {}, [], 42, '0', 'false',  -42, 3.14, -3.14, Infinity, -Infinity]) to equal [true, {}, [], 42, '0', 'false',  -42, 3.14, -3.14, Infinity, -Infinity]", () => {
  expect(
    _.compact([
      true,
      {},
      [],
      42,
      '0',
      'false',
      -42,
      3.14,
      -3.14,
      Infinity,
      -Infinity,
    ])
  ).toEqual([
    true,
    {},
    [],
    42,
    '0',
    'false',
    -42,
    3.14,
    -3.14,
    Infinity,
    -Infinity,
  ])
})

//test both "truthy" & "falsy" values
test("_.compact([true, {}, false, [], 42, null, '0', 0, 'false', '', -42, 3.14, -3.14, undefined, Infinity, -Infinity]) to equal [true, {}, [], 42, '0', 'false', -42, 3.14, -3.14, Infinity, -Infinity]", () => {
  expect(
    _.compact([
      true,
      {},
      false,
      [],
      42,
      null,
      '0',
      0,
      'false',
      '',
      -42,
      3.14,
      -3.14,
      undefined,
      Infinity,
      -Infinity,
    ])
  ).toEqual([
    true,
    {},
    [],
    42,
    '0',
    'false',
    -42,
    3.14,
    -3.14,
    Infinity,
    -Infinity,
  ])
})
