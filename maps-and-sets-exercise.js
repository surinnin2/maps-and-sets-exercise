//Quick Question #1
// returns a set {1,2,3,4}

//Quick Question #2
// returns a string 'ref'

//Quick Questions #3
/*
m = 
    {[1,2,3] => true}
    {[1,2,3] => false}

*/

//hasDuplicate
const hasDuplicate = (arr) => {
    return !(new Set(arr).size === arr.length)
}

//vowelCount
const vowelCount = (str) => {
    let noVowel = Array.from(str.toLowerCase()).filter((letter) => {
      return ('aeiou'.indexOf(letter) !== -1)
    })
    const myMap = new Map()
    noVowel.forEach((letter) => {
    if (!myMap.has(letter)) {
      myMap.set(letter, 1)
    } else {
      myMap.set(letter, myMap.get(letter) + 1)
    }
  })
  return myMap
}