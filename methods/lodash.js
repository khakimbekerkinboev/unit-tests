const _ = {
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
}

module.exports = _
