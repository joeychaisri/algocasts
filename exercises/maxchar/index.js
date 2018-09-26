// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"



function maxChar(str) {



    const dict = {};
    var max = 0
    var maxchar = ''

    for (let char of str){

        if ( !dict[char]){
            dict[char] = 1
        }else{
            dict[char]++
        }

    }

    for (let char in dict){

        if(dict[char] > max){
            max = dict[char]
            maxchar = char

        }
    }


    



    return maxchar

}

module.exports = maxChar;
