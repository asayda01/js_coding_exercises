import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
  } from "../challenges/exercise006";

describe("sumMultiples", () => {
  test("returns the next number after the given number in the array", () => {
    expect(sumMultiples([5, 3, 7, 8, 1, 10], 7)).toBe(8);
    expect(sumMultiples([5, 3, 7, 8, 1, 10], 1)).toBe(10);
    expect(sumMultiples([4, 22, 654, 123, 65, 23, 40, 1], 22)).toBe(654);
  });

  test("if the number is not found in the array, returns null", () => {
    expect(sumMultiples([5, 3, 7, 8, 1, 10], 55)).toBe(null);
  });

  test("if the number is found more than once, returns the number after the first instance", () => {
    expect(sumMultiples([5, 3, 7, 8, 1, 3, 10], 3)).toBe(7);
  });

  test("if the number is found in the final index position of the array, returns null", () => {
    expect(sumMultiples([5, 3, 7, 8, 1, 3, 10], 10)).toBe(null);
  });
});

describe("isValidDNA", () => {
  test("returns an object with the count of 1s and 0s in a string", () => {
    expect(isValidDNA("11000")).toEqual({
      1: 2,
      0: 3,
    });

    expect(isValidDNA("0101010111")).toEqual({
      1: 6,
      0: 4,
    });

    expect(isValidDNA("1111111")).toEqual({
      1: 7,
      0: 0,
    });

    expect(isValidDNA("0111")).toEqual({
      1: 3,
      0: 1,
    });
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
