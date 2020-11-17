/*----- constants -----*/
var player1 = {
      turn: 1
  };
//var player1 = turn[1];
// var player1Color = '#009933';
var player2 = {
      turn: -1
  };
//var player2 = turn[-1];
// var player2Color = '#cc00cc';
// var noPlayer, {
//     turn: 0 ;
// };
 var empty = turn[0]; 



/*----- app's state (variables) -----*/
// This is each index of the circle on the board, in each column
// (Starts at the bottom of each column)
 let columns = {
   c0: [35, 28, 21, 14, 7, 0],
   c1: [36, 29, 22, 15, 8, 1],
   c2: [37, 30, 23, 16, 9, 2],
   c3: [38, 31, 24, 17, 10, 3],
   c4: [39, 32, 25, 18, 11, 4],
   c5: [40, 33, 26, 19, 12, 5],
   c6: [41, 34, 27, 20, 13, 6],
 };
// Create the variables to store the board and what turn it is
// We will assign values to these in the init() function
let board;
let turn;

// Use this to figure out what color the background of the circle should be
// For example, if we want to figure out the color for player '-1':
//          playerColors["-1"] ---> "blue"
 let playerColors = {
   "1" : "lime",
   "-1" : "purple",
   "0" : "white"
 }

/*----- cached element references -----*/


/*----- event listeners -----*/


/*----- functions -----*/
// This function should set the initial values for the game
// You can use this to reset your game as well
 function init() {
   board = new Array(42).fill(0)
   turn = 1;
   render()
 }

 function init() {
     board = [
       [0, 0 ,0 ,0 ,0, 0],  // col 0
       [0, 0 ,0 ,0 ,0, 0],  // col 1
       [0, 0 ,0 ,0 ,0, 0],  // col 2
       [0, 0 ,0 ,0 ,0, 0],  // col 3
       [0, 0 ,0 ,0 ,0, 0],  // col 4
       [0, 0 ,0 ,0 ,0, 0],  // col 5
       [0, 0 ,0 ,0 ,0, 0],  // col 6
     ];
     // initialize other state variables below
   }
   function render(){

   }
// This function is responsible for updating our 'board' array when
// a user clicks on a column to drop a piece
// ** ONLY MODIFY 'board', DONT TOUCH THE DOM **
// Call render() at the end of this function
 function handleMove() {
 }
// This function is reponsible for putting the changes to our 'board' array
// onto the users screen AKA render it on the screen!
// ** HERE IS WHERE WE WANT TO CHANGE THE DOM **
 function render() {
 }
// Call init() to start the game fresh when the page first loads
init();

