let computerChoice;
let playerChoice;
let winner;
let playerScore = 0;
let computerScore = 0;

const computerSelection = () =>{
    const randomSelection = Math.floor(Math.random() * 3) + 1;

    switch(randomSelection){
        case 1:
            computerChoice = "ROCK";
            break;
        case 2: 
            computerChoice = "PAPER";
            break;
        default:
            computerChoice = "SCISSORS";
            break;
    }
}

const playerSelection = (errorMessage = "") => {
    playerChoice = prompt(`${errorMessage}Rock, Paper, Scissors.`);
    playerChoice = playerChoice.toLocaleUpperCase().trim()
    
    if(playerChoice === "ROCK"){
        computerSelection();
        playRound(playerChoice, computerChoice);
    }
    else if(playerChoice === "PAPER"){
        computerSelection()
        playRound(playerChoice, computerChoice);
    }
    else if(playerChoice === "SCISSORS"){
        computerSelection()
        playRound(playerChoice, computerChoice);
    }
    else{
        playerChoice = playerSelection("INVALID SELECTION!!!\n")
    }
}

const playRound = (playerChoice, computerChoice) =>{
    
    if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
        displaySelection(playerChoice, computerChoice)
        console.log("You win")
        scoreBoard(1, 0)
    } else if(playerChoice === "ROCK" && computerChoice === "SCISSORS") {
        displaySelection(playerChoice, computerChoice)
        console.log("You win")
        scoreBoard(1, 0)
    } else if (playerChoice === "PAPER" && computerChoice === "ROCK") {
        displaySelection(playerChoice, computerChoice)
        console.log("You win")
        scoreBoard(1, 0)
    } else if(playerChoice === "ROCK" && computerChoice === "ROCK") {
        displaySelection(playerChoice, computerChoice)
        console.log("It's a tie")
        scoreBoard(0, 0)
    } else if(playerChoice === "PAPER" && computerChoice === "PAPER") {
        displaySelection(playerChoice, computerChoice)
        console.log("It's a tie")
        scoreBoard(0, 0)
    } else if(playerChoice === "SCISSORS" && computerChoice === "SCISSORS") {
        displaySelection(playerChoice, computerChoice)
        console.log("It's a tie")
        scoreBoard(0, 0)
    }
    else{
        displaySelection(playerChoice, computerChoice)
        console.log("You lose")
        scoreBoard(0, 1)
    }
}
const scoreBoard = ( playerRoundScore = 0, computerRoundScore = 0) =>{
    playerScore = playerScore + playerRoundScore;
    computerScore = computerScore + computerRoundScore;
    console.log(`Player score: ${playerScore} \n\Computer score: ${computerScore}`)
}

const displaySelection = (playerSelectonDisplay, computerSelectionDisplay) =>{
    console.log(`Player: ${playerSelectonDisplay} \n\Computer: ${computerSelectionDisplay}`)
}
const declareWinner = () =>{
    console.log(`\n\n\TOTAL SCORE\nPLAYER: ${playerScore}\n\COMPUTER: ${computerScore}\n`)
            
    if(playerScore > computerScore){
        console.log("PLAYER WINS!!!!!")
    }else{
        console.log("COMPUTER WINS!!!!!")
    }
}
const newGame = () =>{
    const startNewGame = confirm("DO YOU WANT TO TRY AGAIN??")
    if(startNewGame == true){
        preGameLoad()
    }else{
        alert("MAYBE LATER")
    }
}
const startGame = () =>{
    let roundCount = 0;
    for (let i = 1; i <= 5; i++) {
        roundCount = i;
        console.log(`*******************ROUND ${i}*******************`);
        playerSelection();
        
        if(i == 5){
            declareWinner()
            newGame()
        }
    }
}
const preGameLoad = () =>{
    const loader = confirm("WELCOME TO THE ROCK, PAPER, SCISSORS GAME\n\ACCEPT TO BEGIN");
    if(loader == true){
        startGame();
    }else{
        return alert("MAYBE NEXT TIME.")
    }
}
//preGameLoad();