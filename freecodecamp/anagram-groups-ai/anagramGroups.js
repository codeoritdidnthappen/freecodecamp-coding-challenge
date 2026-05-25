/*
  https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-01

  Anagram Groups
  Given an array of words, return a 2D array of the words grouped into anagrams.

  Words are anagrams if they contain the same letters in any order.
  Each word belongs to exactly one group.
  Return order doesn't matter.

  Example:
    groupAnagrams(["listen", "silent", "hello", "enlist", "world"])
    -> [["listen", "silent", "enlist"], ["hello"], ["world"]]
*/

/**
 * Groups words that are anagrams of each other.
 *
 * Time:  O(m * n) — m words, n = max word length
 * Space: O(m * n) — output holds every word; map holds at most m keys
 *
 * @param {string[]} words
 * @returns {string[][]}
 */
function groupAnagrams(words) {
  const groups = new Map();

  for (let w = 0; w < words.length; w++) {
    const word = words[w];
    const count = new Array(26);

    for (let i = 0; i < word.length; i++) {
      const idx = word.charCodeAt(i) - 97;
      count[idx] = (count[idx] || 0) + 1;
    }

    let key = "";
    for (let c = 0; c < 26; c++) {
      key += (count[c] || 0) + "#";
    }

    let bucket = groups.get(key);
    if (bucket === undefined) {
      bucket = [];
      groups.set(key, bucket);
    }
    bucket.push(word);
  }

  return Array.from(groups.values());
}

console.log(groupAnagrams(["listen", "silent", "hello", "enlist", "world"])); // should return [["listen", "silent", "enlist"], ["hello"], ["world"]]
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // should return [["ate", "eat", "tea"], ["bat"], ["nat", "tan"]]
console.log(groupAnagrams(["care", "race", "acre", "pots", "stop", "tops", "opts", "post", "spot", "evil", "vile", "live", "veil"])); // should return [["acre", "care", "race"], ["evil", "live", "veil", "vile"], ["opts", "post", "pots", "spot", "stop", "tops"]]
console.log(groupAnagrams(["algorithms", "logarithms", "education", "cautioned", "auctioned", "triangle", "integral", "alerting", "relating"])); // should return [["alerting", "integral", "relating", "triangle"], ["algorithms", "logarithms"], ["auctioned", "cautioned", "education"]]

if (typeof module !== "undefined" && module.exports) {
  module.exports = { groupAnagrams };
}
