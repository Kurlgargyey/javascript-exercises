const sumAll = function(num1, num2) {
 let result = 0;
 let start = 0;
 let end = 0;
 
 if (num1 > num2) {
  end = num1;
  start = num2;
 }
 else {
  end = num2;
  start = num1;
 }

 if ((typeof start) != "number" || (typeof end) != "number" || start < 0 || end < 0) {
  return "ERROR";
 }

 for (let i = start; i <= end; i++){
  result += i;
 }
 return result;
};

// Do not edit below this line
module.exports = sumAll;
