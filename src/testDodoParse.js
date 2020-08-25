/* eslint-disable no-restricted-globals */
function parseDodoCode(rawCode) {
	//sanity check: Dodo Codes must be five characters long
	if (rawCode.length !== 5) {
		return null;
	}
	
	var code = rawCode.toLowerCase();
	
	var keyboardMap = [
		["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-"],
		["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "/"],
		["a", "s", "d", "f", "g", "h", "j", "k", "l", ":", "'"],
		["z", "x", "c", "v", "b", "n", "m", ",", ".", "?", "!"]
	]
	
	var dodoChars = code.split("");

	//the "keyboard coordinates of each of the characters in x, y with 0,0 being 1; 1,0 being 2, etc."
	var dodoKbdCoords = [[0,0],[0,0],[0,0],[0,0],[0,0]];

	//turn our Dodo Code characters into something we can navigate through: coordinates on the Animal Crossing keyboard.
	for(var i = 0; i < dodoChars.length; i++) {
		//sanity check: dodo codes may not have i, o, or z in them
		if(dodoChars[i] === "i" || dodoChars[i] === "o" || dodoChars[i] === "z") {
			return null;

		} else {
			var currentChar = dodoChars[i];
			for(var j = 0; j < keyboardMap.length; j++) {
				for(var k = 0; k < keyboardMap[k]; k++) {
					if(keyboardMap[j][k] === currentChar) {
						dodoKbdCoords[i] = [j,k];
					}
				}
			}
		}
    }
    
    return dodoKbdCoords;
}

var parsed = parseDodoCode("An1ml");
for(var i = 0; i < parsed.length; i++) {
    console.log("(");
    for(var k = 0; k < parsed[i].length; k++) {
        console.log(parsed[i][k]);
        console.log(",")
    }
    console.log("), ");
}