/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits,
 *  e.g 6 in this example.
 * @param {Number} n
 */
export function sumDigits (n) {
  if (n === undefined) throw new Error("n is required");
  return n.toString().split('').map(Number)
  .reduce(function (a, b) {return a + b}, 0);
};

/**
 * This function creates a range of numbers as an array. 
 * It received a start, an end and a step. 
 * Step is the gap between numbers in the range.
 *  For example, if start = 3, end = 11 and step = 2 
 * the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
export function createRange (start, end, step) {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (step === undefined) step = 1; // as it`s an optional parameter.
  return [...Array(Math.floor(((end - start) / step)) + 1).keys()]
  .map(x => (x * step) + start);
};

/**
 * This function takes an array of user objects and their usage in minutes of 
 * various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used 
 * more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should
 *  return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
export function getScreentimeAlertList (users, date){
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  const the_users = [];
  users.forEach(x => {
    x.screenTime.forEach(screenTime => {
      if (screenTime.date === date) {
        let count_1 = 0;
        for (let key in screenTime.usage) {
          count_1 += screenTime.usage[key]};
        if (count_1 >= 100) { the_users.push(x.username)};
        };
    });
  });
  return the_users;
};

/**
 * 
 * This function will receive a hexadecimal color code in the format #FF1133.
 * A hexadecimal code is a number written in hexadecimal notation, 
 * i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) 
 * represent the amount of red, the next 2 chars (11) represent the amound of green,
 *  and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * 
 * @param {String} str
 */
export function hexToRGB (hexStr) {
  if (hexStr === undefined) throw new Error("hexStr is required");
  const red      = hexStr[1] + hexStr[2];
  const green    = hexStr[3] + hexStr[4];
  const blue     = hexStr[5] + hexStr[6];
  const rgb_code = [red,green,blue] ;
  for(let i = 0; i < rgb_code.length; i++){
      rgb_code[i] = parseInt(rgb_code[i],16);
  }
  return "rgb("+ rgb_code + ")";
};

/**
 * This function takes a noughts and crosses board represented as an array, 
 * where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, 
 * "0" if the player 0 has won, and null if there is currently no winner.
 * 
 * @param {Array} board
 */
export function findWinner (board) {
  
  if (board === undefined) throw new Error("board is required");
  
  for (let i = 0; i < 3; i++) {
    // check for rows 
    if (board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][0] !== '') { return board[i][0] } ;
    // check for columns 
    if (board[0][i] === board[1][i] && board[0][i] === board[2][i] && board[0][i] !== '') { return board[0][i] } ;
    // check for diagonals
    if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] !== '') { return board[0][0] } ;
    if (board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[0][2] !== '') { return board[0][2] } ;
    };
    return null;
    
  };
