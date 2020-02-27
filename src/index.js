module.exports = function toReadable (number) {
  let nameOfNumber = {
    0: '',
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
  }

  let edinici = number%10;
  let desyatki = Math.floor((number/10)%10) * 10;
  let sotni = Math.floor((number/100)%10);
  let result = "zero";

  if (number%100 <= 20 && number%100 > 0) {
    result = nameOfNumber[sotni] + ' ' + nameOfNumber[100] + ' ' + nameOfNumber[number%100];
  } else if (number !== 0) {
    result = nameOfNumber[sotni] + ' ' + nameOfNumber[100] + ' ' + nameOfNumber[desyatki] + ' ' + nameOfNumber[edinici];
  }

  if (number < 100 && number > 0) {
    if (number <= 20) {
      result = nameOfNumber[number];
    } else {
      result = nameOfNumber[desyatki] + ' ' + nameOfNumber[edinici];
    }
  }
  return result.trim();
}
