const obj = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred"
};


module.exports = function toReadable(number) {
    if (number === 0) {
        return obj[number];
    }
    let result = "";

    const hundred = Math.floor(number / 100);
    if (hundred > 0) {
        result += obj[hundred] + " " + obj[100];
    };
    const des = number % 100;
    if (des === 0) {
        return result;
    }
    if (result) {
        result += " ";
    }
    if (des < 20) {
        result += obj[des];
    } else {
        const edinica = des % 10;
        result += obj[des - edinica];
        if (edinica > 0) {
            result += " " + obj[edinica];
        }
    };
    return result;
}