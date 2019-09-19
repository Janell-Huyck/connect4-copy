let columnOne = []; //simply the array of discs in each column
let columnTwo = [];
let columnThree = [];
let columnFour = [];
let columnFive = [];
let columnSix = [];
let columnSeven = [];

let columnOneDiv = document.getElementById("columnOne"); //where to actually draw a column
let columnTwoDiv = document.getElementById("columnTwo");
let columnThreeDiv = document.getElementById("columnThree");
let columnFourDiv = document.getElementById("columnFour");
let columnFiveDiv = document.getElementById("columnFive");
let columnSixDiv = document.getElementById("columnSix");
let columnSevenDiv = document.getElementById("columnSeven");

let arrayOfDiaganolUpRight = []; //Up and to the right

let board = [
  columnOne,
  columnTwo,
  columnThree,
  columnFour,
  columnFive,
  columnSix,
  columnSeven
];
let boardDivs = [
  columnOneDiv,
  columnTwoDiv,
  columnThreeDiv,
  columnFourDiv,
  columnFiveDiv,
  columnSixDiv,
  columnSevenDiv
];
let targetColumnDiv; //
let win; //checked under function checkForWin
let currentPlayer; //whose turn it is!  :p
let targetArray; //which array we are going to push the current player's color to

let whatColumnIsItAnyway; // the array index of the column we're working on
let whatRowIsItAnyway; // the array index of the item row that we're working on
let color; //

//TO DO
//not allow more than 6 discs to be placed
//     check length of the array

//determine wins
//horizontal
//veritcal
//diagonal right
//diagonal left

function whenColumnIsClicked() {
  if (targetColumnDiv.childElementCount >= 6) {
    return;
  }
  drawNewDisc();
  targetArray = determineWhatArrayToPushTo();
  addDiscToArray(targetArray);
  checkForWin();
  switchPlayers();
  // console.log(board)
  // console.log((board[whatColumnIsItAnyway ][whatRowIsItAnyway ] === board[whatColumnIsItAnyway - 1][whatRowIsItAnyway - 1]) &&
  //             (board[whatColumnIsItAnyway - 1][whatRowIsItAnyway - 1] === board[whatColumnIsItAnyway - 2][whatRowIsItAnyway - 2]) &&
  //             (board[whatColumnIsItAnyway -2][whatRowIsItAnyway - 2] === board[whatColumnIsItAnyway - 3][whatRowIsItAnyway - 3]))
  // console.log((board[whatColumnIsItAnyway][whatRowIsItAnyway] === board[whatColumnIsItAnyway + 1][whatRowIsItAnyway + 1]) &&
  //             (board[whatColumnIsItAnyway + 1][whatRowIsItAnyway + 1] === board[whatColumnIsItAnyway + 2][whatRowIsItAnyway + 2]) &&
  //             (board[whatColumnIsItAnyway +2][whatRowIsItAnyway + 2] === board[whatColumnIsItAnyway + 3][whatRowIsItAnyway + 3]))
}

function drawNewDisc() {
  let newDiv = document.createElement("div");
  newDiv.classList.add(currentPlayer);
  if (currentPlayer === "red") {
    newDiv.dataset.color = "red";
  } else {
    newDiv.dataset.color = "black";
  }
  targetColumnDiv.appendChild(newDiv);
}

function determineWhatArrayToPushTo() {
  for (let i = 0; i < boardDivs.length; i++) {
    if (targetColumnDiv === boardDivs[i]) {
      targetArray = board[i];
      whatRowIsItAnyway = targetArray.length; // determine row and column here!
      whatColumnIsItAnyway = i;
      // console.log(whatColumnIsItAnyway)
      // console.log("targetArray: " + targetArray)
    }
  }
  return targetArray;
}

function resetBoard() {
  // location.reload()
  board.forEach(function(column) {
    column.length = 0;
  });
  boardDivs.forEach(function(column) {
    column.innerHTML = "";
  });
  win = false;
  // color = "red"
  currentPlayer = "red";
  // console.log("Current player is set to " + currentPlayer)
  selectStartingPlayer();
  // console.log("current player is: " + currentPlayer)
}

function whosTurnIsItAnyways() {
  color = document.getElementById("whosTurn");
  color.innerText = `It is ${currentPlayer}s turn!`;
}

function addDiscToArray() {
  targetArray.push(currentPlayer);
}

function selectStartingPlayer() {
  var tempNumber = Math.floor(Math.random() * 2);
  if (tempNumber == 0) {
    currentPlayer = "red";
  } else {
    currentPlayer = "black";
  }
  return currentPlayer;
}

function switchPlayers() {
  if (currentPlayer == "red") {
    currentPlayer = "black";
  } else {
    currentPlayer = "red";
  }
  let color = document.getElementById("whosTurn");
  color.innerText = `It is ${currentPlayer}s turn!`;
  return;
}

function checkForWin() {
  // console.log("bottom left is: " + board[0][0])
  // console.log("last disc placed is: " + targetArray[targetArray.length -1])
  // console.log("the column (determined by targetArray is: " + targetArray)
  // console.log("the grid numbers in [column] , [row] are:" + whatColumnIsItAnyway + "and" + whatRowIsItAnyway )

  checkForWinHorizontal();
  checkForWinVertical();
  // checkForWinDiagonalRight()
  checkForWinDiagonalDownRight();

  if (win == true) {
    window.alert(
      "Congratulations, " +
        currentPlayer +
        "!  You won!  Click OK to play again."
    );
    resetBoard();
  }
}

boardDivs.forEach(function(column) {
  // our click-handlers
  column.addEventListener("click", function(whatIsClicked) {
    targetColumnDiv = this;
    whenColumnIsClicked();
  });
});

function checkForWinHorizontal() {
  for (let i = 0; i < 4; i++) {
    if (board[i][whatRowIsItAnyway] === undefined) {
    } else if (
      board[i][whatRowIsItAnyway] === board[i + 1][whatRowIsItAnyway] &&
      board[i][whatRowIsItAnyway] === board[i + 2][whatRowIsItAnyway] &&
      board[i][whatRowIsItAnyway] === board[i + 3][whatRowIsItAnyway]
    ) {
      console.log(currentPlayer + " won by horizontal");
      return (win = true);
    }
  }
}

// board[whatColumnIsItAnyways][0] === board[whatColumnIsItAnyways][1] ... etc.  Same format as the horizontal.  stop at whatColumnIsItAnyways.length()

function checkForWinVertical() {
  for (let i = 0; i <= 5; i++) {
    // console.log(board[i][0] === board[i][3])
    if (board[whatColumnIsItAnyway][i] === undefined) {
    } else if (
      board[whatColumnIsItAnyway][i] === board[whatColumnIsItAnyway][i - 1] &&
      board[whatColumnIsItAnyway][i] === board[whatColumnIsItAnyway][i - 2] &&
      board[whatColumnIsItAnyway][i] === board[whatColumnIsItAnyway][i - 3]
    ) {
      console.log(currentPlayer + " won by vertical");
      return (win = true);
    }
  }
}
function checkForWinDiagonalUpRight() {
  // if ()
}

function checkForWinDiagonalDownRight() {
  var diagonalDownRightArray = buildAnArrayDiagonalDownRight();
  var win = checkDiagonalArrayForWin(diagonalDownRightArray);
  return win;
}



function checkDiagonalArrayForWin(array) {
  for (let j = 0; j < array.length; j++) {
     if (
      array[j] === array[j + 1 ] &&
      array[j] === array[j + 2] &&
      array[j] === array[j + 3]
    ) {
      console.log(currentPlayer + " won by diagonal");
      return (win = true);
    }
  }

}

function buildAnArrayDiagonalDownRight() {
  //build an array to search
  var diagonalDownRightArray = [];
  var currentDisc = "";
  var heightOfDiscDropped = board[whatColumnIsItAnyway].length;
  var farRightColumnToStartArray = whatColumnIsItAnyway + heightOfDiscDropped;

  var columnWeAreCurrentlyChecking = farRightColumnToStartArray; //we will modify this in the loop

  //potentially searching all rows.  "i" is the row we're checking
  for (let i = 0; i <= 6; i++) {
    columnWeAreCurrentlyChecking = columnWeAreCurrentlyChecking - 1;
    //check to see if column we're checking is in the board

    if (
      //check that the column is from 0 - 6
      columnWeAreCurrentlyChecking <= 6 &&
      columnWeAreCurrentlyChecking >= 0
    ) {
      //find location of disc we are checking
      currentDisc = board[columnWeAreCurrentlyChecking][i];

      if (currentDisc === undefined) {
        // there is a break in the diagonals.  just put a non-repeating item in as a placeholder.
        diagonalDownRightArray.push(i);
      } else {
        // there is a disc in the diagonals.  put the color of the disc
        diagonalDownRightArray.push(currentDisc);
      }
    } else {
      continue;
    }
  }
  console.log("diagonalDownRightArray is: " + diagonalDownRightArray);
  return diagonalDownRightArray;
}

resetBoard();
whosTurnIsItAnyways();
