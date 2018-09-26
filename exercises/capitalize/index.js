// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'



function capitalize(str) {

    array = str.split(" ")
    array2 = []

    for (var char of array){
        array2.push(char[0].toUpperCase() + char.slice(1))
    }

    debugger;
    return array2.join(" ")


}

module.exports = capitalize;
