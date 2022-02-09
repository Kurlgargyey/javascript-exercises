const fibonacci = function(num) {
 let fibstart = [1,1]
 if (num > 0) {
  while (fibstart.length <= num){
   fibstart.splice(fibstart.length,0,fibstart[fibstart.length-1]+fibstart[fibstart.length-2])
  }
  return fibstart[num-1]
 } else {
  return "OOPS"
 }
};

// Do not edit below this line
module.exports = fibonacci;
