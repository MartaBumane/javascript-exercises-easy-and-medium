/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */


function reverse(int) {
    let reverseNr = parseFloat(int.toString().split('').reverse().join('')) * Math.sign(int);
    return reverseNr;

}

module.exports = reverse;
