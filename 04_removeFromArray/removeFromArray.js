
const removeFromArray = function(array, ...args) {
 filter = args;
 return array.filter((item)=>{
  for (argument of filter) {
   if (item === argument) {
    return false;
   }
  }
  return true;
 })
};

// Do not edit below this line
module.exports = removeFromArray;
