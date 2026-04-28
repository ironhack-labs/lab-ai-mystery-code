//Code snippet
//Taken from https://stackoverflow.com/questions/79917383/is-there-a-better-way-to-do-this-clunky-function-maps-arrays-sets-or-none-of

function randStatus(type = "status") {
  let status = "";
  const buffOptions = [
    "gunslinger",
    "teamwork",
    "sharpness",
    "distraction",
    "trick",
    "undying",
    "badassery",
    "stability",
  ];
  const debuffOptions = [
    "fire",
    "fear",
    "grappled",
    "infection",
    "prone",
    "limping",
    "dizziness",
    "slumber",
  ];

  if (type === "buff") {
    status = buffOptions[randNum(0, buffOptions.length)];
  } else if (type === "debuff") {
    status = debuffOptions[randNum(0, debuffOptions.length)];
  }

  return status;
}
