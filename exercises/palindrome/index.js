// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    var n = str.length
    var string = ''
    
    
    
    for (i=str.length ; i>=0 ; i--){
        string = string + str.charAt(i)
    
    }

    if (string == str){
        return true
    }else{
        return false
    }


}

module.exports = palindrome;
