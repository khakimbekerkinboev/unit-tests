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
}

module.exports = _
