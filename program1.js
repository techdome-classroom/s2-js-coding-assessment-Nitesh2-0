/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let map = {
    ')':'(',
    '}':'{',
    ']':'['
  };
  for(let i=0; i<s.length; i++){
    let char = s[i];
    if(char === '(' || char === '{' || char === '['){
      stack.push(char);
    }else if()
  }
};

module.exports = { isValid };


