/** 
 * 1: Organize the array 'disorder' into 3 separate variables: odds, evens and words
 **/ 
var disorder = [2, 'chicken', 4, 5, 15, 'apple', 100, 25, 'lettuce', 'beans', 90, 33, 21, 3, 'pears', 34, 21, 'orange', 'pork']
var odds = [];
var evens = [];
var words = []

/**
 * 2: 'words' is the contents of a vegetarians fridge, she does not eat meat!
 * Get rid of all non-vegi items in the words array and throw them in the trash array
 **/ 

var trash = []
/**
 * 3: Show the contents of the arrays 'odds', 'evens', 'fridge', and 'trash'  
 * to the console
 */

for( let i = 0; i < disorder.length; i++){
  if( isNaN(disorder[i]) ){
    // The iteration value was NOT a number
    words.push(disorder[i])
  }else{
    // The iteration value WAS a number

    if( disorder[i] % 2 == 0){
      // Even
      evens.push(disorder[i])
    }else{
      // Odd
      odds.push(disorder[i])
    }
  }
}

trash.push(words.pop())
trash.push(words.shift())

console.log(odds)
console.log(evens)
console.log(words)