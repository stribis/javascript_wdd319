/**
 * Rememeber the coffee machine from week 1? 
 * Well now we are going to programm one
 * 
 * Convert your flow-chart into code.
 * Use switch case for conditionals
 * Use prompt, confirm & alert to interact with users
 * 
**/

// Does the machine have electricity
var electricity = true

// Does the machine have ingredients
var coffee = 80
var water = 80

// Ask user if he wants to turn on machine
var turnOn = confirm('Do you want to turn on the machine?')

// Check input
if (turnOn){
  // Machine is on
  if ( electricity ) {
    // Machine has electricity

    // Does the machine have ingredients
    if( coffee < 20 && water < 20 ){
      alert('Time to refill your ingredients')
    }else if( coffee > 1 && water > 1){
      // Choose quantity
      var quantity =  prompt('Choose either small, medium or large')
      if (quantity === 'small'){
        //small
        alert( 'Here is your small coffee')
      }else if (quantity === 'medium'){
        //medium
        alert( 'Here is your medium coffee')
      }else if (quantity === 'large'){
        //large
        alert( 'Here is your large coffee')
      }else{
        // None of the above
        alert( 'Your input is incorrect' )
      }
    }else{
      //refill ingredients
      alert('You have to refill NOW')
    }


  } else {
    // No electricity, tell user
    alert('The machine is not connected to the wall')
  }
}else{
  // Machine is off
  
}