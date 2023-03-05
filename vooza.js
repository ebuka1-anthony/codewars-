//Inspired by the development team at Vooza, write the function that
//* accepts the name of a programmer, and
//returns the number of lightsabers owned by that person.
//e only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.
//te: your function should have a default parameter.
//r example(Input --> Output):
//nyone else" --> 0
//ach" --> 18

var howManyLightsabersDoYouOwn = function(name){
  if (name === "Zach"){
    return 18;
  } else {
    return 0;
  }
}
