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
  test("reverses the digits of a number", () => {
    expect(getComplementaryDNA(5)).toBe(5);
    expect(getComplementaryDNA(104)).toBe(401);
    expect(getComplementaryDNA(12345)).toBe(54321);
    expect(getComplementaryDNA(100)).toBe(1); // No leading 0 necessary
  });
});

describe("isItPrime", () => {
  test("returns the total of the numbers in all sub arrays", () => {
    const arrs = [[1, 2, 3], [6, 3, 1], [1], [9, 10], [3, 5]];
    expect(isItPrime(arrs)).toBe(44);
  });
});

describe("createMatrix", () => {
  test("returns an array with the first and last items swapped", () => {
    expect(createMatrix([1, 2])).toEqual([2, 1]);
    expect(createMatrix([1, 2, 3])).toEqual([3, 2, 1]);
    expect(createMatrix([1, 2, 3, 4])).toEqual([4, 2, 3, 1]);
  });

  test("makes no difference when the array length is < 2", () => {
    expect(createMatrix([1])).toEqual([1]);
    expect(createMatrix([])).toEqual([]);
  });
});

describe("areWeCovered", () => {
  test("returns true if any of the properties of an object contain the specified string", () => {
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872,
    };
    expect(areWeCovered(obj1, "table")).toBe(true);

    // Note that the objects provided to the function could have any keys/values
    const obj2 = {
      product_name: "Sparkle n Shine Dishwasher Tablets",
      price: 1.99,
      location: "Hulme",
      discounted: false,
      available: true,
    };
    expect(areWeCovered(obj2, "Dishwasher")).toBe(true);
  });

  test("returns false if none of the properties of an object contain the specified string", () => {
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872,
    };
    expect(areWeCovered(obj1, "chair")).toBe(false);

    // Note that the objects provided to the function could have any keys/values
    const obj2 = {
      product_name: "Sparkle n Shine Dishwasher Tablets",
      price: 1.99,
      location: "Hulme",
      discounted: false,
      available: true,
    };
    expect(areWeCovered(obj2, "Carpet Cleaner")).toBe(false);
  });

  test("The search string should not be case sensitive", () => {
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872,
    };

    expect(areWeCovered(obj1, "warrington")).toBe(true);
    expect(areWeCovered(obj1, "linnmon")).toBe(true);
    expect(areWeCovered(obj1, "Liverpool")).toBe(false);
  });
});
