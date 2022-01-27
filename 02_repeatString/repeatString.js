const repeatString = function(string, loops) {
 let i = 0;
 let result = '';
 while(i<loops){
  result += string;
  i++;
 }
 if(loops < 0){
  return 'ERROR';
 }
 return result;
};

// Do not edit below this line
module.exports = repeatString;
