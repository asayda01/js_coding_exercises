import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
  } from "../challenges/exercise006";

describe("sumMultiples", () => {
  test("returns the sum of any numbers which are a multiple of 3 or 5", () => {
    expect(sumMultiples([1,2,3,4,5])).toBe(8);
    expect(sumMultiples([3,3,3,5,5])).toBe(19);
    expect(sumMultiples([1,2,3,4,5,6,7,8,9,10,11,12,13,14])).toBe(45);
  });

  test("if the numbers are not a multiple of 3 or 5, returns zero", () => {
    expect(sumMultiples([2,4,8,14,16,22,26])).toBe(0);
  });

  test("if the numbers are both a multiple of 3 and a multiple of 5, returns a multiple of 15", () => {
    expect(sumMultiples([15,15,15,15,15], 22)).toBe(75);
  });
});

describe("isValidDNA", () => {
  test("returns a true if it is a valid DNA string that contains characters C, G, T or A only", () => {

    expect(isValidDNA("A")).toBe(true);
    expect(isValidDNA("CGT")).toBe(true);
    expect(isValidDNA("ACGT")).toBe(true);  
});
test("it should not be case sensitive", () => {

  expect(isValidDNA("a")).toBe(true);
  expect(isValidDNA("cgt")).toBe(true);
  expect(isValidDNA("acgt")).toBe(true);  
});
test("returns false if it recieves non-letter characters", () => {
  expect(isValidDNA("@$£?")).toBe(false);
  expect(isValidDNA("A?")).toBe(false);
  expect(isValidDNA("AC-DC")).toBe(false);
  expect(isValidDNA("abcd*Ge?")).toBe(false);  
});

});

describe("getComplementaryDNA", () => {
  test("returns a string of corresponding base pairs of a valid DNA string", () => {
    expect(getComplementaryDNA("A")).toEqual("T");
    expect(getComplementaryDNA("ACGACGACGACGT")).toEqual("TGCTGCTGCTGCA");
    expect(getComplementaryDNA("ACGT")).toEqual("TGCA");
    expect(getComplementaryDNA("TGCA")).toEqual("ACGT");
  });
  test("it should not be case sensitive", () => {
    expect(getComplementaryDNA("a")).toEqual("T");
    expect(getComplementaryDNA("acgacgAcgacgt")).toEqual("TGCTGCTGCTGCA");
    expect(getComplementaryDNA("acgT")).toEqual("TGCA");
    expect(getComplementaryDNA("tgca")).toEqual("ACGT");
  });

});

describe("isItPrime", () => {
  test("returns true if the number is a prime number", () => {
    expect(isItPrime(0)).toBe(false);
    expect(isItPrime(1)).toBe(false);
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(3)).toBe(true);
    expect(isItPrime(5)).toBe(true);
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(16)).toBe(false);
    expect(isItPrime(123456)).toBe(false);
    expect(isItPrime(7777777777)).toBe(false);
  });
  test("returns false if the number is a negative number as negative numbers aren't primes", () => {
    expect(isItPrime(-1)).toBe(false);
    expect(isItPrime(-2)).toBe(false);
    expect(isItPrime(-3)).toBe(false);
    expect(isItPrime(-5)).toBe(false);
    expect(isItPrime(-7)).toBe(false);
    expect(isItPrime(-16)).toBe(false);
    expect(isItPrime(-123456)).toBe(false);
    expect(isItPrime(-7777777777)).toBe(false);
  });
});

describe("createMatrix", () => {
  test("returns an array of n arrays wherein each array filled with n items,", () => {
    expect(createMatrix(3, "foo")).toEqual([ [ 'foo', 'foo', 'foo' ],
    [ 'foo', 'foo', 'foo' ],
    [ 'foo', 'foo', 'foo' ] ]);
    expect(createMatrix(4,"ho")).toEqual([ [ 'ho', 'ho', 'ho', 'ho' ],
    [ 'ho', 'ho', 'ho', 'ho' ],
    [ 'ho', 'ho', 'ho', 'ho' ],
    [ 'ho', 'ho', 'ho', 'ho' ] ]);
    expect(createMatrix(2,"Marry Christmas")).toEqual([ [ 'Marry Christmas', 'Marry Christmas' ],
    [ 'Marry Christmas', 'Marry Christmas' ] ] );
  });

  test("return an empty array if n is not a valid number or less than 1", () => {
    expect(createMatrix(0,"No Succes")).toEqual([]);
    expect(createMatrix(-5,"No Pain, No Gain")).toEqual([]);
  });
});

describe("areWeCovered", () => {
  test("returns true if there are enough staff scheduled for the given day", () => {

    const  staff1 = [
      { name: "Fernando", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Juan", rota: [ "Sunday", "Tuesday", "Wednesday","Friday"] },
      {  name: "Carlos", rota: ["Thursday", "Tuesday", "Wednesday"] },
      {  name: "Verona", rota: ["Sunday", "Thursday", "Friday"] },
      ];

      const day1 = "Tuesday";

    expect(areWeCovered(staff1, day1)).toBe(true);

    const  staff2 = [
      { name: "Chen Li", rota: ["Monday", "Tuesday","Wednesday","Thursday", "Friday","Saturday","Sunday"] },
      { name: "Patel", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday","Monday","Friday"] },
      { name: "Kim", rota: [ "Sunday", "Tuesday", "Wednesday","Friday"] },
      {  name: "Tyrone", rota: ["Thursday", "Tuesday", "Wednesday"] },
      {  name: "Jamal", rota: [ "Tuesday", "Wednesday",] },
      {  name: "Shanqelita", rota: ["Sunday", "Thursday", "Friday","Saturday"] },
      ];

      const day2 = "Wednesday";

    expect(areWeCovered(staff2, day2)).toBe(true);
  });
});
