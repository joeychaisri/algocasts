// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

steps(3)

function steps(n) {

    var square = ""
    var count = 0



    

    for(i=1 ; i<=n ; i++){

        var space = ""

    square = square + "#"

    count = n-i 

    if (count > 0){
        for (x=count; x>0 ; x--){

            space = space + " "

            debugger;

        }
    }else{
        space = ""
    }

      
     console.log(square + space)
     
     
     

    }

}

module.exports = steps;
