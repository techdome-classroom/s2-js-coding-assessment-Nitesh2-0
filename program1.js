/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let array = s.split("");
    const mapVal = new map(); 
    map.set('{','}');
    map.set('(',')'); 
    map.set('[',']'); 
    
    let temp = 0; 
    for(let i=0; i<s.length; i++){
      for(let j=i; j<array.length; j++){
        if(map.get(array[i] === array[j])){
          array[i],array[j]=0;
          t += 2
        }
      }
    }
    if(array.length == temp){
      return true;
    }
    return false;
};

module.exports = { isValid };


