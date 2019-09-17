

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
let win = false      //checked under function checkForWin
let currentPlayer    //whose turn it is!  :p
let targetArray      //which array we are going to push the current player's color to
let whatColumnIsItAnyway //
let whatRowIsItAnyway //

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
            
            whatRowIsItAnyway = targetArray.length            // determine row and column here!  
            whatColumnIsItAnyway = i
            
            targetArray = board[i]
        }
    }
    return targetArray
}



function resetBoard () {
    board.forEach( function(column){
        column = []
    })
    boardDivs.forEach(  function(column) {
        column.innerHTML = ""        
    })
    selectStartingPlayer()
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
    window.alert("Starting Player is: " + currentPlayer)
    let color = document.getElementById("whosTurn")
    color.innerText = `It is ${currentPlayer}s turn!`
    return
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
    
    console.log("bottom left is: " + board[0][0])
    console.log("last disc placed is: " + targetArray[targetArray.length -1])
    console.log("the column (determined by targetArray is: " + targetArray)
    console.log("the grid numbers in [column] , [row] are:" + whatColumnIsItAnyway + "and" + whatRowIsItAnyway )


    
    // checkForWinHorizontal()
    checkForWinVertical()
    // checkForWinDiagonalRight()
    // checkForWinDiagonalLeft()




    if (win == true) {
        window.alert("Congratulations, " + currentPlayer + "!  You won!  Click OK to play again.")
        resetBoard()
    }
}

boardDivs.forEach( function(column){                                 // our click-handlers
    column.addEventListener("click", function(whatIsClicked) {
        targetColumnDiv = this
        whenColumnIsClicked()
    })
})



function checkForWinHorizontal() {
    //     for () {
        
        //     }
        }
        
    function checkForWinVertical() {
        // if (cell === board[y][x+1] && cell === board[y][x+2]) { ... }
        // console.log(targetArray.slice(-1))
        
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
