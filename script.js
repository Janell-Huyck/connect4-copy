// <!-- TODO List -->

// <!-- Check for win.-->
// <!-- When checking for win check diagnol, side to side, and up and down. -->

// <!-- When placing a chip check whether the spot below is taken by another chip.-->

// <!-- 2d array -->

// <!-- Alternate players -->

// <!-- Array is a string of words. "black" "red" "empty" as a placeholder-->

// <!-- function that decides what player starts -->

// <!-- function for placing which column the chip will go and *click handler* functionputting the chip into the column -->

// <!-- draw board and screen with css that sections -->

// <!-- class for each color chip and class for chip. -->

// <!-- create board in HTML -->

// <!-- need to know dimensions of board -->

// <!-- click handler -->

// <!-- once 6 discs are added to a column do NOT allow anymore. -->

// <!-- each column has divs inside of it. -->

// <!-- columns made with flex -->

// <!-- String of arrays that represents where chips are -->

// <!-- fucntion that pushes a chip into a column -->

// <!-- use css as only a way to display the board and chips.  -->

// <!-- HTML will NEED seven columns with click handler(js) -->

// let board = [
//     [],
//     [],
//     [],
//     [],
//     [],
//     []
// ];

let columnOne = []
let columnTwo = []
let columnThree = []
let columnFour = []
let columnFive = []
let columnSix = []
let columnSeven = []

let columnOneDiv = document.getElementById("columnOne")
let columnTowDiv = document.getElementById("columnTwo")
let columnThreeDiv = document.getElementById("columnThree")
let columnFourDiv = document.getElementById("columnFour")
let columnFiveDiv = document.getElementById("columnFive")
let columnSixDiv = document.getElementById("columnSix")
let columnSevenDiv = document.getElementById("columnSeven")

let board = [columnOne, columnTwo, columnThree, columnFour, columnFive, columnSix, columnSeven]
let win = false      //checked under function checkForWin
let currentPlayer    //whose turn it is!  :p


function resetBoard () {
    columnOne = []
    columnTwo = []
    columnThree = []
    columnFour = []
    columnFive = []
    columnSix = []
    columnSeven = []
}




function selectStartingPlayer() {
    var tempNumber = Math.floor((Math.random() * 2))
    if (tempNumber == 0) {
        currentPlayer = "red"
    } else {
        currentPlayer = "black"
    }
    console.log("Starting player is: " + currentPlayer)
    return
}

function switchPlayers() {
    if (currentPlayer == "red") {
        currentPlayer = "black"
    } else {
        currentPlayer = "red"
    }
    return
}


function checkForWin() {
    checkForWinHorizontal()
    checkForWinVertical()
    checkForWinDiagonal()
    if (win == true) {
        window.alert("Congratulations, " + currentPlayer + "!  You won!  Click OK to play again.")
        resetBoard()
    }
}

// function checkForWinHorizontal() {
    //     for () {
        
        //     }
        // }
        
        // function checkForWinVertical() {
            //     for () {
                
                //     }
                // }
                
                // function checkForWinDiagonal() {
                    //     for () {
                        
                        //     }
                        // }





selectStartingPlayer()
resetBoard()
