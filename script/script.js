//import  {visualStore}  from './store';

let computerChoice;
let playerChoice;
let img;
let caption;
let alt;
let winner;
let messageDisplay = document.querySelector('.messageDisplay');
let playerSelectionHeader = document.querySelector('.playerSelectionHeader');
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

const getUserSelection = () =>{    
    let rockBtn = document.querySelector('.userRock');
    let paperBtn = document.querySelector('.userPaper');
    let scissorsBtn = document.querySelector('.userScissors');
    rockBtn.addEventListener('click', ()=>{playerChoice = 'ROCK', playerSelection(), hideDefaults()})
    paperBtn.addEventListener('click', ()=>{playerChoice = 'PAPER', playerSelection(), hideDefaults()})
    scissorsBtn.addEventListener('click', ()=>{playerChoice = 'SCISSORS', playerSelection(), hideDefaults()})
}
const hideDefaults = () =>{
    playerSelectionHeader.style.visibility = 'hidden';
}
/*const mapImgAndCaption = () =>{
    visualStore.map(data => 
        img = data.link,
        caption = data.title,
        alt = data.alt
    )
}*/
const computerSelection = () =>{
    const randomSelection = Math.floor(Math.random() * 3) + 1;
    let computerChoiceImg = document.querySelector('.stageComputerImage');
    
    switch(randomSelection){
        case 1:
            computerChoice = "ROCK";
            computerChoiceImg.src= './img/rock-removebg-preview.png';
            break;
        case 2: 
            computerChoice = "PAPER";
            computerChoiceImg.src = './img/paper-removebg-preview.png';
            break;
        default:
            computerChoice = "SCISSORS";
            computerChoiceImg.src = './img/scissors-removebg-preview.png';
            break;
    }
}

const playerSelection = (errorMessage = "") => {
    
    let playerChoiceImg =  document.querySelector('.stagePlayerImage');
    if(playerChoice === "ROCK"){
        playerChoiceImg.src = './img/rock-removebg-preview.png'
        computerSelection();
        playRound(playerChoice, computerChoice);
    }
    else if(playerChoice === "PAPER"){
        playerChoiceImg.src = './img/paper-removebg-preview.png'
        computerSelection()
        playRound(playerChoice, computerChoice);
    }
    else if(playerChoice === "SCISSORS"){
        playerChoiceImg.src = './img/scissors-removebg-preview.png'
        computerSelection()
        playRound(playerChoice, computerChoice);
    }
    else{
        return false;
    }
}
const resetGame = () =>{
    messageDisplay.innerHTML =  messageDisplay.innerHTML = `GAME OVER`;
    playerSelectionHeader.style.visibility = 'visible';
    //declareWinner()
    //newGame()
}
const trackRoundIteration= () =>{
    let roundDisplay = document.querySelector('.roundDisplay');
    roundCount = roundCount+1;
    roundDisplay.innerHTML = `ROUND ${roundCount}`;
    if(roundCount == 5){
        resetGame()
    }
}
const playRound = (playerChoice, computerChoice) =>{
    trackRoundIteration()
    if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
        displaySelection(playerChoice, computerChoice)
        messageDisplay.innerHTML = "You win"
        roundCount = roundCount + 1;
        scoreBoard(1, 0)
    } else if(playerChoice === "ROCK" && computerChoice === "SCISSORS") {
        displaySelection(playerChoice, computerChoice)
        messageDisplay.innerHTML = "You win"
        scoreBoard(1, 0)
    } else if (playerChoice === "PAPER" && computerChoice === "ROCK") {
        displaySelection(playerChoice, computerChoice)
        messageDisplay.innerHTML = "You win"
        scoreBoard(1, 0)
    } else if(playerChoice === "ROCK" && computerChoice === "ROCK") {
        displaySelection(playerChoice, computerChoice)
        messageDisplay.innerHTML = "It's a tie"
        scoreBoard(0, 0)
    } else if(playerChoice === "PAPER" && computerChoice === "PAPER") {
        displaySelection(playerChoice, computerChoice)
        messageDisplay.innerHTML = "It's a tie"
        scoreBoard(0, 0)
    } else if(playerChoice === "SCISSORS" && computerChoice === "SCISSORS") {
        displaySelection(playerChoice, computerChoice)
        messageDisplay.innerHTML = "It's a tie"
        scoreBoard(0, 0)
    }
    else{
        displaySelection(playerChoice, computerChoice)
        messageDisplay.innerHTML = "You lose"
        scoreBoard(0, 1)
    }
}
const scoreBoard = ( playerRoundScore = 0, computerRoundScore = 0) =>{
    let scoreBoard = document.querySelector('.scoreDisplay');
    playerScore = playerScore + playerRoundScore;
    computerScore = computerScore + computerRoundScore;
    scoreBoard.innerHTML = `Player | ${playerScore} - ${computerScore} | Computer`
}
const displaySelection = (playerSelectonDisplay, computerSelectionDisplay) =>{
    let computerChoiceCaption = document.querySelector('.stageComputerCaption');
    let playerChoiceCaption =  document.querySelector('.stagePlayerCaption');

    playerChoiceCaption.innerHTML = `YOU CHOSE ${playerSelectonDisplay}`;
    computerChoiceCaption.innerHTML = `COMPUTER CHOSE ${computerSelectionDisplay}`;
}
/*const declareWinner = () =>{
    console.log(`\n\n\TOTAL SCORE\nPLAYER: ${playerScore}\n\COMPUTER: ${computerScore}\n`)
            
    if(playerScore > computerScore){
        messageDisplay.innerHTML = "PLAYER WINS!!!!!";
    }else{
        messageDisplay.innerHTML = "COMPUTER WINS!!!!!"
    }
}
*/
/*const newGame = () =>{
    messageDisplay = document.querySelector('.messageDisplay');
    messageDisplay.innerHTML = "DO YOU WANT TO TRY AGAIN??";
    //const startNewGame = confirm("DO YOU WANT TO TRY AGAIN??")
    if(startNewGame == true){
        preGameLoad()
    }else{
        messageDisplay.innerHTML = "MAYBE LATER";
    }
}*/
const startGame = () =>{
    getUserSelection();
}
/*const preGameLoad = () =>{
    const loader = confirm("WELCOME TO THE ROCK, PAPER, SCISSORS GAME\n\ACCEPT TO BEGIN");
    if(loader == true){
        startGame();
    }else{
        return alert("MAYBE NEXT TIME.")
    }
}*/
startGame();
//preGameLoad();