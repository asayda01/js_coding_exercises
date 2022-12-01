export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(x => Math.pow (x,2));
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  return [...new Set(arr1)].filter(Set.prototype.has, new Set(arr2)).sort();
}
