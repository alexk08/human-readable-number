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

  // let edinici = '';
  // if (number%10) {
  const edinici = number%10;
  // }
  const desyatki = Math.floor(number/10) * 10;
  const sotni = Math.floor(number/100);
  
  // console.log(desyatki);
  if (number <= 20) {
    return nameOfNumber[number];
  } else if (number > 20 && number < 100) {
    return nameOfNumber[desyatki] + ' ' + nameOfNumber[edinici];
  } else if (number >= 100) {
    return nameOfNumber[sotni] + ' ' + nameOfNumber[100] + ' ' + nameOfNumber[Math.floor((number%100)/10) * 10] + ' ' + nameOfNumber[edinici];
  }
}

// console.log(toReadable (720));
