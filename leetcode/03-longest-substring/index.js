/*
3. Longest Substring Without Repeating Characters
Medium

Given a string s, find the length of the longest substring without duplicate characters.

Example 1:
  Input: s = "abcabcbb"
  Output: 3
  Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

Example 2:
  Input: s = "bbbbb"
  Output: 1
  Explanation: The answer is "b", with the length of 1.

Example 3:
  Input: s = "pwwkew"
  Output: 3
  Explanation: The answer is "wke", with the length of 3.
  Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Constraints:
 - 0 <= s.length <= 5 * 104
 - s consists of English letters, digits, symbols and spaces.
*/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  if (s.length === 0) return 0
  let longestCount = 1
  let count = 1
  let temp = ""
  for (let i = 0, len = s.length; i < len; i++) {
    temp = s[i]
    for (let j = i + 1, lenJ = s.length; j < lenJ; j++) {
      // console.log(1, s[i], s[j], temp, longestCount, count, `j:${j}`, `lenJ:${lenJ}`)
      if (temp.includes(s[j])) {
        if (longestCount < count) longestCount = count
        count = 1
        break
      }
      count++
      temp += s[j]
      if (longestCount < count) longestCount = count
      // console.log(2, s[i], s[j], temp, longestCount, count)
    }
    count = 1
  }
  return longestCount
}

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("au"))
