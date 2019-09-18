

let columnOne = []      //simply the array of discs in each column
let columnTwo = []
let columnThree = []
let columnFour = []
let columnFive = []
let columnSix = []
let columnSeven = []

let columnOneDiv = document.getElementById("columnOne")    //where to actually draw a column
let columnTwoDiv = document.getElementById("columnTwo")
let columnThreeDiv = document.getElementById("columnThree")
let columnFourDiv = document.getElementById("columnFour")
let columnFiveDiv = document.getElementById("columnFive")
let columnSixDiv = document.getElementById("columnSix")
let columnSevenDiv = document.getElementById("columnSeven")

let board = [columnOne, columnTwo, columnThree, columnFour, columnFive, columnSix, columnSeven]
let boardDivs = [columnOneDiv, columnTwoDiv, columnThreeDiv, columnFourDiv, columnFiveDiv, columnSixDiv, columnSevenDiv]
let targetColumnDiv //
let win   //checked under function checkForWin
let currentPlayer    //whose turn it is!  :p
let targetArray      //which array we are going to push the current player's color to
let whatColumnIsItAnyway //
let whatRowIsItAnyway
let color //

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
        return
    }
        drawNewDisc()
        targetArray = determineWhatArrayToPushTo()
        addDiscToArray(targetArray)
        checkForWin()
        switchPlayers()
        console.log(board)
        console.log(board[0][0] == board[1][1])
}



function drawNewDisc() {
    let newDiv = document.createElement("div")
    newDiv.classList.add(currentPlayer)
    if (currentPlayer === "red"){
        newDiv.dataset.color = "red"
    } else {
        newDiv.dataset.color = "black"
    }
    targetColumnDiv.appendChild(newDiv)
}



function determineWhatArrayToPushTo(){
    for (let i = 0 ; i < boardDivs.length; i++) {
        if (targetColumnDiv === boardDivs[i]) {
            
            targetArray = board[i]
            whatRowIsItAnyway = targetArray.length         // determine row and column here!  
            whatColumnIsItAnyway = i
            // console.log(whatColumnIsItAnyway)
            // console.log("targetArray: " + targetArray)
        }
    }
    return targetArray
}

function resetBoard () {
    // location.reload()
    board.forEach( function(column){
        column = []
    })
    boardDivs.forEach(  function(column) {
        column.innerHTML = ""        
    })
    win = false
    color = "red"
    currentPlayer = "red"
    columnOne.length = 0     //simply the array of discs in each column
    columnTwo.length = 0
    columnThree.length = 0
    columnFour.length = 0
    columnFive.length = 0
    columnSix.length = 0
    columnSeven.length = 0
    console.log("Current player is set to " + currentPlayer)
    selectStartingPlayer()
    // console.log("current player is: " + currentPlayer)
}

function whosTurnIsItAnyways() {
    color = document.getElementById("whosTurn")
    color.innerText = `It is ${currentPlayer}s turn!`
}

function addDiscToArray() {
    targetArray.push(currentPlayer)
}



function selectStartingPlayer() {
    var tempNumber = Math.floor((Math.random() * 2))
    if (tempNumber == 0) {
        currentPlayer = "red"
    } else {
        currentPlayer = "black"
    }
    return currentPlayer
}



function switchPlayers() {
    if (currentPlayer == "red") {
        currentPlayer = "black"
    } else {
        currentPlayer = "red"
    }
    let color = document.getElementById("whosTurn")
    color.innerText = `It is ${currentPlayer}s turn!`
    return
}



function checkForWin() {
    
    // console.log("bottom left is: " + board[0][0])
    // console.log("last disc placed is: " + targetArray[targetArray.length -1])
    // console.log("the column (determined by targetArray is: " + targetArray)
    // console.log("the grid numbers in [column] , [row] are:" + whatColumnIsItAnyway + "and" + whatRowIsItAnyway )



    checkForWinHorizontal()
    checkForWinVertical()
    // checkForWinDiagonalRight()
    // checkForWinDiagonalLeft()




    if (win == true) {
        window.alert("Congratulations, " + currentPlayer + "!  You won!  Click OK to play again.")
        resetBoard()
        console.log("win is set to " + win)
    }
}

boardDivs.forEach( function(column){                                 // our click-handlers
    column.addEventListener("click", function(whatIsClicked) {
        targetColumnDiv = this
        whenColumnIsClicked()
    })
})



function checkForWinHorizontal() {
    for (let i = 0; i < 4; i++) {
        if (board[i][whatRowIsItAnyway] === undefined) {
        } else if ( (board[i][whatRowIsItAnyway]  === board[i+1][whatRowIsItAnyway])   && 
                (board[i][whatRowIsItAnyway] === board[i+2][whatRowIsItAnyway])  &&
                (board[i][whatRowIsItAnyway] === board[i+3][whatRowIsItAnyway])){
                console.log(currentPlayer + " won by horizontal")
            return win = true
            
        }
    }
}    

// board[whatColumnIsItAnyways][0] === board[whatColumnIsItAnyways][1] ... etc.  Same format as the horizontal.  stop at whatColumnIsItAnyways.length()
    
function checkForWinVertical() {
    for (let i = 0; i <= 5; i++) {
        // console.log(board[i][0] === board[i][3])
        if (board[whatColumnIsItAnyway][i] === undefined) {

        } else if ((board[whatColumnIsItAnyway][i] === board[whatColumnIsItAnyway][i - 1]) &&
                (board[whatColumnIsItAnyway][i] === board[whatColumnIsItAnyway][i - 2]) &&
                (board[whatColumnIsItAnyway][i] === board[whatColumnIsItAnyway][i - 3])) {
                console.log(currentPlayer + " won by vertical")
                return win = true

        }
    }
}
function checkForWinDiagonalRight() {
    //     for () {
        
        //     }
        }
  
function checkForWinDiagonalRight() {
    //     for () {
        
        //     }
        }

                    
resetBoard()
whosTurnIsItAnyways()