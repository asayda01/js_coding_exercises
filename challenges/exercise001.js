// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substring(0,1).toUpperCase() +   word.substring(1, word.length );
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.substring(0,1).toUpperCase() + "."  +lastName.substring(0,1).toUpperCase();
  //  for more better runtime and efficiency one can use: 
  //   return firstName.substring(0,1) + "."  +lastName.substring(0,1);
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return ( originalPrice + ( (vatRate/100) * originalPrice ) ) ; 

  // not rounding the numbers properly
  // take another look later
  // do NOT forget

  /*             */
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return ( originalPrice - ( (reduction/100)  * originalPrice).toFixed(2) );
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  return str.substr(Math.ceil(str.length / 2 - 1), str.length % 2 === 0 ? 2 : 1);
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split('').reverse().join('');
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  for(let idx in words) { 
    words[idx] = words[idx].split('').reverse().join('');
}
  return words;          // could be improved * 
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  return users.filter(users => users.type === "Linux").length;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  return (scores.reduce((a, b) => a + b, 0)) / scores.length ;
  
  /*             */

  // not rounding the numbers properly
  // take another look later
  // do NOT forget

  /*             */

}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  
  if (n % 15 == 0) return("fizzbuzz");
  else if (n % 3 == 0) return("fizz");
  else if (n % 5 == 0) return("buzz");
  else return n;

}

