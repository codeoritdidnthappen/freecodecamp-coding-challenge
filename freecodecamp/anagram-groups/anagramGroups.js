/*
  https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-01

  2026-05-01

  Anagram Groups
  Given an array of words, return a 2d array of the words grouped into anagrams.

  Words are anagrams if they contain the same letters in any order.
  Each word belongs to exactly one group.
  Return order doesn't matter.
  For example, given ["listen", "silent", "hello", "enlist", "world"], return [["listen", "silent", "enlist"], ["hello"], ["world"]].

*/

/*
  Solution:
  - Loop over array
  - Sort each word and use it as a key in a map
  - As you loop over each item compare it against the keys and either add it to existing key array or add a new one
  - After the loop create a new array with the arrays from each key
*/

function groupAnagrams(words) {
  let arr = []
  let map = new Map()

  for (let i = 0, len = words.length; i < len; i++) {
    const key = words[i].split("").sort().join("")
    // If current sorted string is in map, add original word to array
    if (map.get(key)) {
      map.set(key, [ ...map.get(key), words[i] ])
    }
    // If sorted string is not in map, create new key and add original word to new array
    else {
      map.set(key, [ words[i] ])
    }
  }

  for (let [key, value] of map.entries()) {
    arr.push(value)
  }

  return arr
}

console.log(groupAnagrams(["listen", "silent", "hello", "enlist", "world"])) // should return [["listen", "silent", "enlist"], ["hello"], ["world"]]
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])) // should return [["ate", "eat", "tea"], ["bat"], ["nat", "tan"]]
console.log(groupAnagrams(["care", "race", "acre", "pots", "stop", "tops", "opts", "post", "spot", "evil", "vile", "live", "veil"])) // should return [["acre", "care", "race"], ["evil", "live", "veil", "vile"], ["opts", "post", "pots", "spot", "stop", "tops"]]
console.log(groupAnagrams(["algorithms", "logarithms", "education", "cautioned", "auctioned", "triangle", "integral", "alerting", "relating"])) // should return [["alerting", "integral", "relating", "triangle"], ["algorithms", "logarithms"], ["auctioned", "cautioned", "education"]]