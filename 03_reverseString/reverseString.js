const reverseString = function(string) {
 let result = '';
 let i = string.length;
 for (; i >= 0 ; i--){
  const extractedLetter = string.slice(i-1,i);
  result += extractedLetter;
 }
 return result;
};
// Do not edit below this line
module.exports = reverseString;
