/*----- constants -----*/
// Use this to figure out what color the background of the circle should be
// For example, if we want to figure out the color for player '-1':
//          playerColors["-1"] ---> "blue"
const playerColors = {
  "1": "lime",
  "-1": "purple",
  "0": "white"
};

/*----- app's state (variables) -----*/

// Create the variables to store the board and what turn it is
// We will assign values to these in the init() function
let board;
let turn;
let winner;


/*----- cached element references -----*/
const colMarkers = document.querySelectorAll('th > div');
const msgEl = document.getElementById('msg');

/*----- event listeners -----*/
document.querySelector('thead').addEventListener('click', handleMove);

/*----- functions -----*/
// This function should set the initial values for the game
// You can use this to reset your game as well

function init() {
  board = [
    [0, 0, 0, 0, 0, 0],  // col 0
    [0, 0, 0, 0, 0, 0],  // col 1
    [0, 0, 0, 0, 0, 0],  // col 2
    [0, 0, 0, 0, 0, 0],  // col 3
    [0, 0, 0, 0, 0, 0],  // col 4
    [0, 0, 0, 0, 0, 0],  // col 5
    [0, 0, 0, 0, 0, 0],  // col 6
  ];
  turn = 1;
  winner = null;
  render();
}

// This function is responsible for updating our 'board' array when
// a user clicks on a column to drop a piece
// ** ONLY MODIFY 'board', DONT TOUCH THE DOM **
// Call render() at the end of this function
function handleMove(evt) {
  if (evt.target.tagName !== 'DIV' || winner) return;
  const colIdx = evt.target.id[1];
  const colArr = board[colIdx];
  // Find first zero in colArr
  const rowIdx = colArr.indexOf(0);
  // Return if colArr full
  if (rowIdx === -1) return;
  board[colIdx][rowIdx] = turn;
  turn *= -1;
  updateWinner(colIdx, rowIdx);
  render();
}

function updateWinner(colIdx, rowIdx) {
  // colIdx and rowIdx represent the recent cell clicked
  winner = checkVerticalWin(colIdx, rowIdx);
  if (winner) return;
  winner = checkHorizontalWin(colIdx, rowIdx);
  if (winner) return;
  

}

function checkVerticalWin(colIdx, rowIdx) {
  //
  const colArr = board[colIdx];
  const sum = colArr[rowIdx] + colArr[rowIdx - 1] + colArr[rowIdx - 2] + colArr[rowIdx - 3];
  if (sum === 4 || sum === -4) {
    return colArr[rowIdx];
  } else {
    return null;
  }
}

function checkHorizontalWin(colIdx, rowIdx) {
  const player = board[colIdx][rowIdx];
  while (i >= 0 || i <= 6) {
    const sum = player
  } 
  if (sum === 4 || sum === -4) {
    return player[ ];
  } else {
    return null;
  }
}

// This function is reponsible for putting the changes to our 'board' array
// onto the users screen AKA render it on the screen!
// ** HERE IS WHERE WE WANT TO CHANGE THE DOM **
function render() {
  board.forEach(function(colArr, colIdx) {
    colArr.forEach(function(cell, rowIdx) {
      const td = document.getElementById(`c${colIdx}r${rowIdx}`);
      td.style.backgroundColor = playerColors[cell];
    });
  });
  // hide/show colMarkers
  colMarkers.forEach(function(div, idx) {
    const colArr = board[idx];
    div.style.display = colArr.includes(0) ? 'block' : 'none';
  });
  if (winner === 'T') {
    msgEl.textContent = "It's a Tie";
  } else if (winner) {
    const player = playerColors[winner].toUpperCase();
    msgEl.textContent = `${player} Wins!`;
  } else {
    const player = playerColors[turn].toUpperCase();
    msgEl.textContent = `${player}'s Turn`;
  }

}
// Call init() to start the game fresh when the page first loads
init();

