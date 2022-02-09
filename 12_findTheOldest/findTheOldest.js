const findTheOldest = function(arr) {
 const oldest = arr.reduce(function(obj, person){

  const personStart = person.yearOfBirth;

  if (!person.yearOfDeath) {
   const personEnd = (new Date()).getFullYear(); 
   person.age = personEnd-personStart; 
  } 
  
  else {
   const personEnd = person.yearOfDeath;
   person.age = personEnd-personStart;
  }

  if (person.age > obj.age) {
   obj = person;
  }
  
  return obj;

 },
  {
   name : '',
   yearOfBirth: 0,
   yearOfDeath: 0,
   age: 0,
   }
 )

 return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
