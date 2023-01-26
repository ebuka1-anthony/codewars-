//Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
//Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't

function lovefunc(flower1, flower2){
  // check if flower1 is even and flower 2 is odd
  if(flower1 % 2===0 && flower2 % 2 != 0){
    return true
  } // check if flower2 is even and flower 1 is odd
  else if(flower2 % 2===0 && flower1 % 2 != 0){
    return true
  } else {
    return false
  }
}