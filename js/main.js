/*----- constants -----*/
var player_1 = {

	"mark_color" : "blue",

	"data_name" : "Player 1",

	"wins" : 0

};

var player_1_moves = [];


var player_2 = {

	"mark_color" : "red",

	"data_name" : "Player 2",

	"wins" : 0

};


var player_2_moves = [];

var num_of_players = 0;

// when it is player vs computer
var player = {

	"data_name" : "Player",

	"wins" : 0

};

var player_moves = [];


var computer = {

		"data_name" : "Computer",

		"wins" : 0

};

var computer_moves = [];
var winner = false;
var moves = 0;
var diagonal_win = [

	[14, 22, 30, 38],
	[7, 15, 23, 31],
	[15, 23, 31, 39],
	[0, 8, 16, 24],
	[8, 16, 24, 32],
	[16, 24, 32, 40],
	[1, 9, 17, 25],
	[9, 17, 25, 33],
	[17, 25, 33, 41],
	[2, 10, 18, 26],
	[10, 18, 26, 34],
	[3, 11, 19, 27],
	[3, 9, 15, 21],
	[4, 10, 16, 22],
	[10, 16, 22, 28],
	[5, 11, 17, 23],
	[11, 17, 23, 29],
	[17, 23, 29, 35],
	[6, 12, 18, 24],
	[12, 18, 24, 30],
	[18, 24, 30, 36],
	[13, 19, 25, 31],
	[19, 25, 31, 37],
	[20, 26, 32, 38]

];
//  var player1 = {
//      turn: 1
//  };
//var player1 = turn[1];
// var player1Color = '#009933';
// var player2 = {
//      turn: -1
//  };
//var player2 = turn[-1];
// var player2Color = '#cc00cc';
// var noPlayer, {
//     turn: 0 ;
// };
// var empty = turn[0]; 



/*----- app's state (variables) -----*/
// This is each index of the circle on the board, in each column
// (Starts at the bottom of each column)
// let columns = {
//   c0: [35, 28, 21, 14, 7, 0],
//   c1: [36, 29, 22, 15, 8, 1],
//   c2: [37, 30, 23, 16, 9, 2],
//   c3: [38, 31, 24, 17, 10, 3],
//   c4: [39, 32, 25, 18, 11, 4],
//   c5: [40, 33, 26, 19, 12, 5],
//   c6: [41, 34, 27, 20, 13, 6],
// };
// // Create the variables to store the board and what turn it is
// // We will assign values to these in the init() function
// let board;
// let turn;

// // Use this to figure out what color the background of the circle should be
// // For example, if we want to figure out the color for player '-1':
// //          playerColors["-1"] ---> "blue"
// let playerColors = {
//   "1" : "lime",
//   "-1" : "purple",
//   "0" : "white"
// }

// /*----- cached element references -----*/


// /*----- event listeners -----*/


// /*----- functions -----*/
// // This function should set the initial values for the game
// // You can use this to reset your game as well
// function init() {
//   board = new Array(42).fill(0)
//   turn = 1;
//   render()
// }

// // function init() {
// //     board = [
// //       [0, 0 ,0 ,0 ,0, 0],  // col 0
// //       [0, 0 ,0 ,0 ,0, 0],  // col 1
// //       [0, 0 ,0 ,0 ,0, 0],  // col 2
// //       [0, 0 ,0 ,0 ,0, 0],  // col 3
// //       [0, 0 ,0 ,0 ,0, 0],  // col 4
// //       [0, 0 ,0 ,0 ,0, 0],  // col 5
// //       [0, 0 ,0 ,0 ,0, 0],  // col 6
// //     ];
// //     // initialize other state variables below
// //   }
//   function render(){

//   }
// // This function is responsible for updating our 'board' array when
// // a user clicks on a column to drop a piece
// // ** ONLY MODIFY 'board', DONT TOUCH THE DOM **
// // Call render() at the end of this function
// function handleMove() {
// }
// // This function is reponsible for putting the changes to our 'board' array
// // onto the users screen AKA render it on the screen!
// // ** HERE IS WHERE WE WANT TO CHANGE THE DOM **
// function render() {
// }
// // Call init() to start the game fresh when the page first loads
// init();

function two_players () {

    num_of_players = 2;
    make_board ();

  };

function check_spot (column_name, new_classname, mark) {
	
	for (var i = 0; i < 7; i++) {

		if (column_name === "col-" + i) {

			
			var column = document.getElementsByClassName("col-" + i);

			
			var column_arr = jQuery.makeArray (column);


			// check from the last spot of the column array and if the most bottom is not taken, populate that spot.
			for (var j = column_arr.length - 1; j > -1; j--) {

				if (column_arr[j].getAttribute("data-name") === "nothing"){

					make_move (column_arr[j], new_classname, mark);

					break;

				};

			};

		};

	};

};



function make_board () {

for (var i = 0; i < 6; i++) {

 for (var j = 0; j < 7; j++) {


   
 };

};

};

start_game ();

function make_move (position, new_classname, mark) {
	
	if (mark === player_1.data_name) {

		player_1_moves.push(parseInt());


	} else if (mark === player_2.data_name) {

		player_2_moves.push(parseInt());


  };

};


// call this function when the game is player 1 vs player 2.
function two_players_move () {

	// for alternating turns. First player always goes first.
	var this_player_clicked = 1;

	// for all of the spots (circles) only make the ones that have data-name as "nothing" be able to be clicked.
	

			if ( $(this).attr("data-name") === "nothing") {

				// check spot for the first player.

				if (this_player_clicked === 1) {

					check_spot ($(this).attr("class").split(" ")[1], "circle-background-color-" + player_1.mark_color, player_1.data_name);
					this_player_clicked = 2;

		 			// later, if moves === 42, it will mean that there is a draw.
					moves ++;

					// check for win after every turn.
					check_for_win ($(this).attr("class").split(" ")[1], player_1.data_name);

				// check spot for the second player.
				} else {

					check_spot ($(this).attr("class").split(" ")[1], "circle-background-color-" + player_2.mark_color, player_2.data_name);
					this_player_clicked = 1;

		 			// later, if moves === 42, it will mean that there is a draw.
					moves ++;

					// check for win after every turn.
					check_for_win ($(this).attr("class").split(" ")[1], player_2.data_name);

				}

		 	};

		};

	;




function check_for_win (column_name, winning_mark) {
    check_column (column_name, winning_mark);
    check_row (winning_mark);
    check_diagonal (winning_mark);

    if (moves === 42) {
  
      $pick_color.fadeOut();
      $row.fadeOut();
    }};
