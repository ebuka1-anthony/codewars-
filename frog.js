//e wide-mouth frog is particularly interested in the eating habits of other creatures.
// just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!
//en he meets the alligator, it then makes a tiny mouth.
//ur goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.
//nction mouthSize(animal) {
//return animal.toLowerCase() == 'alligator' ? 'small' : 'wide';
//}
function mouthSize(animal) {
  if(animal=== 'alligator' || animal === 'ALLIGATOR'){
  return 'small'}
  else{return 'wide'}
}