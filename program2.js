/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let res = 0;
  const roman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  for (let i = 0; i < s.length; i++) {
    const currentValue = roman[s[i]];
    const nextValue = roman[s[i + 1]] || 0; 

    if (currentValue < nextValue) {
      res -= currentValue;
    } else {
      res += currentValue;
    }
  }

  return res; 
};


module.exports = { romanToInt }