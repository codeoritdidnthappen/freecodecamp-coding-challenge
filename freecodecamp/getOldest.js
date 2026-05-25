/**
  * Oldest Person
  * @url https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-11
  * @description
  * Problem:
    Given an array of objects, each with a "name" and "age" property, return an array containing the name of the oldest person.
    If multiple people share the oldest age, return all of their names in the order they appear in the input.

  My solution:
    1. Create array of just ages
    2. Use Math.max to get highest number/odest age
    3. filter original array with oldest age
    4. then map to only return the name
**/
function getOldest(people) {
  const ages = people.map(p => p.age)
  const oldestAge = Math.max(...ages)
  console.log("ages:", ages, "oldestAge:", oldestAge)
  return people.filter(p => p.age === oldestAge).map(p => p.name)
}

// Tests
console.log(getOldest([{ name: "Brenda", age: 40 }])) // should return ["Brenda"]
console.log(getOldest([{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }])) // should return ["Alice"]
console.log(getOldest([{ name: "Allison", age: 25 }, { name: "Bill", age: 30 }, { name: "Carol", age: 30 }])) // should return ["Bill", "Carol"]
console.log(getOldest([{ name: "George", age: 50 }, { name: "Shirley", age: 42 }, { name: "Beth", age: 48 }, { name: "Holly", age: 50 }, { name: "Kevin", age: 44 }, { name: "Frank", age: 47 }, { name: "Zach", age: 50 }, { name: "Jennifer", age: 43 }])) // should return ["George", "Holly", "Zach"]

// NOTES
// https://stackoverflow.com/questions/1966476/how-can-i-process-each-letter-of-text-using-javascript