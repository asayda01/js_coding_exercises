export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  if ( (nums.indexOf(n) ) >= 0 && (nums.indexOf(n)) <= nums.length -2){
    return nums[ (nums.indexOf(n)) +1]};
  return null;
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  let count_1 = 0, count_0 = 0, obj_1 = {};
  if (str.includes("1") === true ) {count_1 = str.match(/1/g).length};
  if (str.includes("0") === true ) {count_0 = str.match(/0/g).length};
  obj_1 = { 0 : count_0 , 1 : count_1 };
  return obj_1;
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  return Number(String(n).split('').reverse().join(''));
  // no leading zero(s) as it returns only numbers not strings
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  let sum_of_arrs = arrs.map(x =>  {return x.reduce((a, b) => a + b, 0)});
  return sum_of_arrs.reduce((k,m)=> k+m,0);
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length <= 1) return arr ;
  [arr[0],arr[arr.length-1]] = [arr[arr.length-1],arr[0]];
  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  return Object.keys(haystack).some(x => 
    String(haystack[x]).toUpperCase().includes(searchTerm.toUpperCase()));
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  let obj = {};
  str.split(" ").forEach( element => {
    obj[element.toLowerCase().replace(/[&\/\\#,+()$~%.'":*?!<>{}]/g, '')] =
     obj[element.toLowerCase().replace(/[&\/\\#,+()$~%.'":*?!<>{}]/g, '')] ? 
     ++obj[element.toLowerCase().replace(/[&\/\\#,+()$~%.'":*?!<>{}]/g, '')] : 1;
  });
  return obj;
  // removes all non-letters characters
};
