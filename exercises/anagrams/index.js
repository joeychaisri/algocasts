// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    if (cleanString(stringA) != cleanString(stringB)) {
        return false
    }

return true

}

function cleanString(a){

    return a.replace(/[^\w]/g,"").toLowerCase().split('').sort().join('')

}

module.exports = anagrams;


// var temp1 = stringA.replace(/[^\w]/g,"").toLowerCase();
// var temp2 = stringB.replace(/[^\w]/g,"").toLowerCase();

// var obj1 = {}
// var obj2 = {}
// var result = true

// for (char of temp1){
//     if (obj1[char]){
//         obj1[char] = obj1[char] + 1
//     }else{
//         obj1[char] = 1
//     }
// }

// for (char of temp2){
//     if (obj2[char]){
//         obj2[char] = obj2[char] + 1
//     }else{
//         obj2[char] = 1
//     }
// }

// console.log(obj1)
// console.log(obj2)

// if (temp1.length != temp2.length){
//     return false
// }else{
//     for (char in obj1){

//         if(obj1[char] != obj2[char]){
//             return false
//         }

//     }
// }


// return result

