I found the following post/question on https://stackoverflow.com/questions/79917383/is-there-a-better-way-to-do-this-clunky-function-maps-arrays-sets-or-none-of

"Is there a better way to do this clunky function (maps, arrays, sets or none of them)?
Best practices
javascript
For context: I'm new to coding and still learning.

What I want:
I recently started to play around with JavaScript, and was trying to make this function as "unrepetitive" as possible. I'd like it so I could pick a random entry from an array (or something similar) that meets the logical comparison. In this case, if the type parameter is the same as the category in the entry.

You can see that I did somewhat achieve it like this, but it feels clunky... I'm not too sure. I haven't tested it just yet (kinda scared to see none of it works). So I'd appreciate constructive feedback!

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
What I have tried:
I have tried maps, but then I couldn't pick a random map entry. I also tried objects, but I'm unsure if it's a bit of an overkill to create an object for each entry (maybe I misunderstood how objects work). I don't fully understand sets either, so I haven't attempted them yet.

JSFiddle link: https://jsfiddle.net/3ncgh62k/2/
(dunno if it works, first time trying this...)"

Analyzing

So the coder tries to find a more elegant way to write a function, which chooses an element from an array randomly. There are two possible arrays from which the function can get a single element (representing a status), depending on the argument (can be either "buff" or "debuff").

Refactoring

To make the purpose of the function more understandable I renamed it to
"getRandomStatus(type)"

Then I defined an object:
const options = {
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

If the argument is not valid - i.e. the given argument is neither "buff" or "debuff" -
the function returns a null. This is achieved by adding:
const optionsArr = options[type];
if (!optionsArr) return null;

The original code did not contain any guard clause like that.

The post does not tell us, what the function randNum looks like, so I definded one
possible version. I hereby used the standard way in Javascript to generate a random
integer from the range minInt to maxInt (maxInt out of bound), which is
Math.floor(Math.random() \* (maxInt - minInt)) + minInt

Finally, by implementing
return optionsArr[randNum(0, optionsArr.length)];
the function selects a random element from the two arrays (object values).
This lookup method (options[type]) replaces both if/else branches and makes the code more
concise.
