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
        
      }
    }
};

module.exports = { isValid };


