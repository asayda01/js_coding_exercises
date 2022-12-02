export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(x => {return x <1 });
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter(x => {return x.charAt(0)== char});
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter(x => {return x.substring(0,3)== "to "});
  //return words.filter(x => {return x.charAt(0)== "t" && x.charAt(1)== "o" && x.charAt(2)== " " });
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}
