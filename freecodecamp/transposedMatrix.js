/*
  https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-09

  Transposed Matrix
  Given a matrix (an array of arrays), return the transposed version of it.

  To transpose the matrix, swap the rows and columns. E.g: a value at index [0, 1] should move to index [1, 0].

  For example, given:

  [
    [1, 2, 3],
    [4, 5, 6]
  ]
  Return:

  [
    [1, 4],
    [2, 5],
    [3, 6]
  ]
*/

function transpose(matrix) {
  let newMatrix = []
  let subMatrix = []
  for (let y = 0, lenY = matrix[0].length; y < lenY; y ++) {
    for (let x = 0, lenX = matrix.length; x < lenX; x++) {
      // console.log(lenX, lenY, x, y, matrix[x][y])
      subMatrix = [ ...subMatrix, matrix[x][y] ]
    }
    newMatrix.push(subMatrix)
    subMatrix = []
  }
  return newMatrix
}

console.log(transpose([[1, 2, 3], [4, 5, 6]])) // should return [[1, 4], [2, 5], [3, 6]]
console.log(transpose([[1, 2], [3, 4], [5, 6]])) // should return [[1, 3, 5], [2, 4, 6]]
console.log(transpose([[1, 2], [3, 4], [5, 6], [7, 8]])) // should return [[1, 3, 5, 7], [2, 4, 6, 8]]
console.log(transpose([["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"], ["j", "k", "l"]])) // should return [["a", "d", "g", "j"], ["b", "e", "h", "k"], ["c", "f", "i", "l"]].
console.log(transpose([[true, false, true, false], [false, true, false, true], [true, true, false, false], [false, false, true, true], [true, false, false, true]])) // should return [[true, false, true, false, true], [false, true, true, false, false], [true, false, false, true, false], [false, true, false, true, true]]