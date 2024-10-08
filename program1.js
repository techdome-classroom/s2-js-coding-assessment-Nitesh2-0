/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const barackets = [
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]

  const stack = [];
  for (let i = 0; i < s.length; j++) {
    for (let j = 0; j < barackets.length; j++) {
      if(s[i] === barackets[j][0]){
        stack.push(s[i]);
      }
    }
  }
};

module.exports = { isValid };


