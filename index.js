const englishWord = {
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
  21: "twenty one",
  22: "twenty two",
  23: "twenty three",
  24: "twenty four",
  25: "twenty five",
  26: "twenty six",
  27: "twenty seven",
  28: "twenty eight",
  29: "twenty nine",
};

function convertTimeToString(timeString) {
  const [n1, n2] = timeString.split(":");

  return [+n1, +n2];
}

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  const [hour, minute] = convertTimeToString(time);

  if (hour === 0 && minute === 0) {
    return "midnight";
  }

  if (minute === 0) {
    return `${englishWord[hour]} o'clock`;
  }

  if (minute === 15) {
    return `quarter past ${englishWord[hour]}`;
  }

  if (minute === 30) {
    return `half past ${englishWord[hour]}`;
  }

  if (minute === 45) {
    return `quarter to ${englishWord[hour + 1]}`;
  }

  if (minute < 30) {
    return `${englishWord[minute]} past ${englishWord[hour]}`;
  }

  if (minute > 30) {
    return `${englishWord[60 - minute]} to ${englishWord[hour + 1]}`;
  }
}

module.exports = { convertTimeToWords };
