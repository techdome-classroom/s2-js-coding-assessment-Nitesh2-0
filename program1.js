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
      }else if(s[i] === barackets[j][1]){
        if(stack.length === 0 || stack.pop() !== barackets[j][0]){
          return false
        }
      }
    }
  }
};

module.exports = { isValid };


