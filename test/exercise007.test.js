import {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
} from "../challenges/exercise007";

describe("sumDigits", () => {
  test("returns the sum of all its digits of a given number", () => {
    expect(sumDigits(8)).toEqual(8);
    expect(sumDigits(123)).toEqual(6);
    expect(sumDigits(555555555555555)).toEqual(75);
    expect(sumDigits(101010101)).toEqual(5);
  });

  test("if the number is not a non-negative number, returns NaN (Not A Number)", () => {
    expect(sumDigits(-135)).toEqual(NaN);
    expect(sumDigits(0)).toEqual(0);
  });

});

describe("createRange", () => {
  test("returns a range of numbers as an array having a start point, an end point and an optional step range", () => {
    expect(createRange(3,11,2)).toEqual([ 3, 5, 7, 9, 11 ]);
    expect(createRange(3,20,3)).toEqual([ 3, 6, 9, 12, 15, 18 ]);
    expect(createRange(11,26,5)).toEqual([ 11, 16, 21, 26 ]);
    expect(createRange(-11,26,5)).toEqual([ -11, -6, -1, 4, 9, 14, 19, 24 ]);
    });

  test("Step is an optional parameter. If it is not provided, it assumes the step is 1", () => {
      expect(createRange(1,5)).toEqual([ 1,2,3,4,5 ]);
      expect(createRange(0,10)).toEqual([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);
    });
});

describe("getScreentimeAlertList", () => {
  test("returns an array of usernames of users who have used more than 100 minutes of screentime for a given date", () => {

     const users1 = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
                     { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                     { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                     { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                     { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                    ]
       },
       {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
                     { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                     { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                     { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                    ]
       },
     ];
     const date1 = "2019-05-04";

const users2 = [
      {
     username: "bionicman_2000",
     name: "JC Denton",
     screenTime: [
                  { date: "2019-05-01", usage: { twitter: 12, instagram: 7, facebook: 16} },
                  { date: "2019-05-02", usage: { twitter: 0, instagram: 4, facebook: 10} },
                  { date: "2019-05-03", usage: { twitter: 13, instagram: 5, facebook: 15} },
                  { date: "2019-05-04", usage: { twitter: 25, instagram: 6, facebook: 13} },
                 ]
    },
    {
     username: "blue_eyes_77",
     name: "Anna Navare",
     screenTime: [
                  { date: "2019-05-01", usage: { twitter: 25, instagram: 94, facebook: 77} },
                  { date: "2019-05-02", usage: { twitter: 39, instagram: 34, facebook: 65} },
                  { date: "2019-05-03", usage: { twitter: 21, instagram: 45, facebook: 45} },
                  { date: "2019-05-04", usage: { twitter: 27, instagram: 36, facebook: 53} },
                  { date: "2019-05-05", usage: { twitter: 54, instagram: 63, facebook: 34} },
                 ]
    },
    {
      username: "sam_j_1989",
      name: "Sam Jones",
      screenTime: [
                   { date: "2019-05-01", usage: { mapMyRun: 33, whatsApp: 0, facebook: 0, safari: 10} },
                   { date: "2019-05-02", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                   { date: "2019-05-03", usage: { mapMyRun: 30, whatsApp: 0, facebook: 0, safari: 31} },
                   { date: "2019-05-04", usage: { mapMyRun: 29, whatsApp: 0, facebook: 0, safari: 25} },
                   { date: "2019-05-05", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 44} },
                  ]
     },
  ];
  const date2 = "2019-05-03";

    expect(getScreentimeAlertList(users1, date1)).toEqual(["beth_1234"]);
    expect(getScreentimeAlertList(users2, date2)).toEqual(["blue_eyes_77"]);
  });

test("returns the usernames if there are multiple users who have used more than 100 minutes of screentime for a given date", () => {
  const users3 = [
    {
   username: "bionicman_2000",
   name: "JC Denton",
   screenTime: [
                { date: "2019-07-01", usage: { twitter: 12, instagram: 7, facebook: 16} },
                { date: "2019-07-02", usage: { twitter: 0, instagram: 4, facebook: 10} },
                { date: "2019-07-03", usage: { twitter: 13, instagram: 5, facebook: 15} },
                { date: "2019-07-04", usage: { twitter: 25, instagram: 6, facebook: 13} },
               ]
  },
  {
   username: "blue_eyes_77",
   name: "Anna Navare",
   screenTime: [
                { date: "2019-07-01", usage: { twitter: 25, instagram: 94, facebook: 77} },
                { date: "2019-07-02", usage: { twitter: 39, instagram: 34, facebook: 65} },
                { date: "2019-07-03", usage: { twitter: 21, instagram: 45, facebook: 45} },
                { date: "2019-07-04", usage: { twitter: 27, instagram: 36, facebook: 53} },
                { date: "2019-07-05", usage: { twitter: 54, instagram: 63, facebook: 34} },
               ]
  },
  {
    username: "Knight_Rider",
    name: "Joseph Manderley",
    screenTime: [
                 { date: "2019-07-01", usage: { mapMyRun: 33, whatsApp: 0, facebook: 0, safari: 10} },
                 { date: "2019-07-02", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                 { date: "2019-07-03", usage: { mapMyRun: 30, whatsApp: 0, facebook: 0, safari: 31} },
                 { date: "2019-07-04", usage: { mapMyRun: 29, whatsApp: 0, facebook: 0, safari: 25} },
                 { date: "2019-07-05", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 44} },
                ]
   },
  {
      username: "beth_1234",
      name: "Beth Smith",
      screenTime: [
                   { date: "2019-07-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                   { date: "2019-07-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                   { date: "2019-07-03", usage: { twitter: 42, instagram: 67, facebook: 19} },
                   { date: "2019-07-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                  ]
     },
];
const date3 = "2019-07-03";
expect(getScreentimeAlertList(users3, date3)).toEqual(["blue_eyes_77", "beth_1234"]);
});
});

describe("hexToRGB", () => {
  test("returns an RGB code for a given hexadecimal color code ", () => {
    expect(hexToRGB("#FF1133")).toEqual("rgb(255,17,51)");
    expect(hexToRGB("#ccdd11")).toEqual("rgb(204,221,17)");
    expect(hexToRGB("#1502BE")).toEqual("rgb(21,2,190)");
  });
});

describe("findWinner", () => {
  test("returns 'X' if player X has won, '0' if the player 0 has won", () => {
    expect(findWinner ([
      ["X", "0", null],
      ["X", null, "0"],
      ["X", null, "0"]
     ])).toBe("X");

    });
  test("returns the winner, even if the winner has won with diagonals", () => {
    expect(findWinner (

      [
      ["X", null, "0"],
      [null, "0", "X"],
      ["0", "X", null]
     ]
     
     
     )).toBe("0");

     expect(findWinner (
      [
      ["0", "X", null],
      ["X", "0", "0"],
      [null, null, "0"]
     ]
     )).toBe("0");

  });
  test("returns null if there is currently no winner", () => {
    expect(findWinner ([
      ["X", "0", null],
      [null, null, "0"],
      ["X", null, "0"]
     ])).toBe(null);
});
});