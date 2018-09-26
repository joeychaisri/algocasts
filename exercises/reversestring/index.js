// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    var n = str.length
    var string = ''
    
    
    
    for (i=str.length ; i>=0 ; i--){
        string = string + str.charAt(i)
    
    }
    
    
    return string

}


module.exports = reverse;
