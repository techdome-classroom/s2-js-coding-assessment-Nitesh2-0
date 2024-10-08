/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const barackets = [
    ["(",")"]
  ]
  let array = s.split("");
  const mapVal = new Map();
  mapVal.set('{', '}');
  mapVal.set('(', ')');
  mapVal.set('[', ']');

  let temp = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (mapVal.get(array[i] === array[j])) {
        array[i], array[j] = 0;
        temp += 2
      }
    }
  }
  if (array.length == temp) {
    return true;
  }
  return false;
};

module.exports = { isValid };


