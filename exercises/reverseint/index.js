// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    
var isthatpositive = null
var temp = []
var nn = 0
var result = ''

if(Math.sign(n)==1){
    nn = n

}else{
    nn = -n
}

temp = nn.toString().split('')

for (var char of temp){
    result = char + result
    
}

if(Math.sign(n)==1){
    
     return parseInt(result)

 
}else if (Math.sign(n)==0) {
    
    return parseInt(result)
}
else{
    var ftemp = parseInt(result)
    return -ftemp
}




}

module.exports = reverseInt;
