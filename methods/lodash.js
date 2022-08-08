const _ = {
  // chunk()
  chunk: (array, size = 1) => {
    let chunks = []
    const timesArr =
      array.length % size === 0
        ? Math.trunc(array.length / size)
        : Math.trunc(array.length / size) + 1

    let start = 0

    for (let i = 0; i < timesArr; i++) {
      const newArr = []

      if (i === timesArr - 1 && array.length % size !== 0) {
        for (let j = 0; j < array.length % size; j++) {
          newArr[newArr.length] = array[start]
          start++
        }
      } else {
        for (let j = 0; j < size; j++) {
          newArr[newArr.length] = array[start]
          start++
        }
      }

      chunks[chunks.length] = newArr
    }

    return chunks
  },

  // compact()
  compact: (array) => {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        newArr[newArr.length] = array[i]
      }
    }
    return newArr
  },

  // drop()
  drop: (array, n = 1) => {
    let newArr = []

    for (let i = n; i < array.length; i++) {
      newArr[newArr.length] = array[i]
    }

    return newArr
  },

  // dropWhile()
  dropWhile: (array, predicate = _.identity) => {
    let newArr = []
    if (array) {
      for (let i = 0; i < array.length; i++) {
        if (!predicate(array[i])) {
          for (let j = i; j < array.length; j++) {
            newArr[newArr.length] = array[j]
          }
          break
        }
      }
    }

    return newArr
  },

  // identity()
  identity: (...args) => {
    return args[0]
  },

  // take()
  take: (array, n = 1) => {
    let newArr = []

    for (let i = 0; i < n; i++) {
      if (array[i]) newArr[newArr.length] = array[i]
    }

    return newArr
  },

  // filter()
  filter: (array, predicate = _.identity) => {
    let newArr = []

    if (array) {
      for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) newArr[newArr.length] = array[i]
      }
    }

    return newArr
  },

  // find()
  find: (array, predicate = _.identity, fromIndex = 0) => {
    let result

    if (array) {
      for (let i = fromIndex; i < array.length; i++) {
        if (predicate(array[i])) {
          result = array[i]
          break
        }
      }
    }

    return result
  },

  // includes()
  includes: (collection, value, fromIndex = 0) => {
    if (typeof collection === 'string' && value !== undefined) {
      let flag = false

      for (let i = fromIndex; i < collection.length; i++) {
        if (collection[i] === value[0]) {
          let subString = ''

          for (let j = i; j < i + value.length; j++) {
            subString += collection[j]
          }

          if (subString === value) {
            flag = true
          }
        }
      }

      return flag
    } else if (collection instanceof Array && value !== undefined) {
      let flag = false

      for (let i = fromIndex; i < collection.length; i++) {
        if (collection[i] === value) {
          flag = true
        }
      }

      return flag
    } else if (
      typeof collection === 'object' &&
      collection !== null &&
      value !== undefined
    ) {
      let flag = false
      const arrOfValues = Object.values(collection)

      for (let i = fromIndex; i < arrOfValues.length; i++) {
        if (arrOfValues[i] === value) {
          flag = true
        }
      }

      return flag
    } else {
      return
    }
  },

  // map()
  map: (collection, iteratee = _.identity) => {
    let newArr = []

    if (collection instanceof Array) {
      for (let i = 0; i < collection.length; i++) {
        newArr[newArr.length] = iteratee(collection[i])
      }
    } else if (typeof collection == 'object' && collection !== null) {
      const arrOfValues = Object.values(collection)

      for (let i = 0; i < arrOfValues.length; i++) {
        newArr[newArr.length] = iteratee(arrOfValues[i])
      }
    }

    return newArr
  },

  // zip()
  zip: (...args) => {
    // declare the result
    let result = []

    // get array of sub-array lengths
    let arrOfLengths = []
    for (let i = 0; i < args.length; i++) {
      arrOfLengths[arrOfLengths.length] = args[i].length
    }

    // sort lengths in a descending order
    for (let i = 0; i < arrOfLengths.length; i++) {
      for (let j = i + 1; j < arrOfLengths.length; j++) {
        if (arrOfLengths[i] < arrOfLengths[j]) {
          let temp = arrOfLengths[i]
          arrOfLengths[i] = arrOfLengths[j]
          arrOfLengths[j] = temp
        }
      }
    }

    // get the length of the longest array
    const longestArrLength = arrOfLengths[0]

    // create the sub-arrays and push them to the main array
    let currentIndex = 0
    for (let i = 0; i < longestArrLength; i++) {
      let newArr = []
      for (let j = 0; j < args.length; j++) {
        if (currentIndex < args[j].length) {
          newArr[newArr.length] = args[j][currentIndex]
        } else {
          newArr[newArr.length] = null
        }
      }
      result[result.length] = newArr
      currentIndex++
    }

    return result
  },
}

// console.log(_.zip(['a', 'b'], [1, 2], [true, false]))

module.exports = _
