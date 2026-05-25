/*
  https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-05
  My solution:
  1. Convert number to string,
  2. loop over each character/number in string
  3. take each number to the string.length power
  4. add them 
  5. compare to original number
*/
function isNarcissistic(n) {
  const nString = n.toString()
  let sum = 0
  for (const c of nString) {
    sum += Math.pow(c, nString.length)
  }
  return sum === n
}

// Tests
console.log(isNarcissistic(153)) // should return true.
console.log(isNarcissistic(154)) // should return false.
console.log(isNarcissistic(371)) // should return true.
console.log(isNarcissistic(512)) // should return false.
console.log(isNarcissistic(9)) // should return true.
console.log(isNarcissistic(11)) // should return false.
console.log(isNarcissistic(9474)) // should return true.
console.log(isNarcissistic(6549)) // should return false.


// NOTES
// https://stackoverflow.com/questions/1966476/how-can-i-process-each-letter-of-text-using-javascript