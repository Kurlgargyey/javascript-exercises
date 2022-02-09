const palindromes = function (string) {
 const punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
 let cleanstring = string.replace(punctuation, '');
 cleanstring = cleanstring.replace(/ /g, '');
 cleanstring = cleanstring.toLowerCase();
 let i = 0;
 while (i <= Math.floor(cleanstring.length/2)){
  if (cleanstring[i] === cleanstring[cleanstring.length-i-1]) {
   i++;
  } else {
   return false;
  }
 }
 return true;
};

// Do not edit below this line
module.exports = palindromes;
