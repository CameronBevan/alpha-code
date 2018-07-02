
// map values as array
const charMap = [
    'B', 'C', 'D', 'F', 'G', 'H', 'J',
    'K', 'L', 'M', 'N', 'P', 'Q', 'R',
    'S', 'T', 'V', 'W', 'X', 'Y', 'Z'
]

// iterate to next value
module.exports.increment = function (previous) {
    // check input length
    const len = previous.length;
    if (len === 0) return new Error('No value provided.');
    
    // create array from input string
    previous = previous.toUpperCase();
    const pArray = [];
    for (i = 0; i < len; i++) {
        const c = previous.charAt(i);
        pArray.push(c);
    }

    // check for valid characters
    let characterCheck = false;
    for (i = 0; i < len; i++) {
        if (charMap.indexOf(pArray[i]) < 0) {
            characterCheck = true;
        }
    }
    if (characterCheck) return new Error(`Invalid value provided: ${previous}`);

    // ready the tier-increment flag
    let tierUp = false;

    // iterate the required char(s)
    for (i = 0; i < len; i++) {
        const index = charMap.indexOf(pArray[len - i - 1]);

        if (i == 0 || tierUp) {
            tierUp = false;
            if (index == charMap.length - 1) {
                tierUp = true;
                pArray[len - i - 1] = charMap[0];
            } else {
                pArray[len - i - 1] = charMap[index + 1];
            }
        }
    }

    // return next value
    return pArray.join('');
};
