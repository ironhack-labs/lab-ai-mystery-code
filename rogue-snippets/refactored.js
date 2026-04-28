function getRandomStatus(type) {
  //function name is more comprehensible
  const options = {
    //using one object instead of two arrays
    buff: [
      "gunslinger",
      "teamwork",
      "sharpness",
      "distraction",
      "trick",
      "undying",
      "badassery",
      "stability",
    ],
    debuff: [
      "fire",
      "fear",
      "grappled",
      "infection",
      "prone",
      "limping",
      "dizziness",
      "slumber",
    ],
  };

  //Guard Clause: If the given argument does not match
  // any object key:
  const optionsArr = options[type];
  if (!optionsArr) return null;

  return optionsArr[randNum(0, optionsArr.length)];
}
//Since we do not know, how the coder defined randNum(),
//I created a correct possible function randNum()
function randNum(startInt, endInt) {
  return Math.floor(Math.random() * (endInt - startInt)) + startInt;
}
