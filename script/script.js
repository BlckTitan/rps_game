let computerChoice;
let playerChoice;
let messageDisplay = document.querySelector('.messageDisplay');
let postGameMessageDisplay = document.querySelector('.postGameMessageDisplay');
let playerSelectionHeader = document.querySelector('.playerSelectionHeader');
let scoreBoardDisplay = document.querySelector('.scoreDisplay');
let preGameInfo = document.querySelector('.preGameInfo');
let game = document.querySelector('.game');
let postGameInfo = document.querySelector('.postGameInfo');
let playAgainBtn = document.querySelector('.playAgain');
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
let loader = null;

const displayModalAndBtn = (modalBtn) =>{
    modalBtn.style.visibility = 'visible';
}
const disappearModalAndBtn = (modalBtn) =>{
    modalBtn.style.visibility = 'hidden';
}
const getUserSelection = () =>{    
    let rockBtn = document.querySelector('.userRock');
    let paperBtn = document.querySelector('.userPaper');
    let scissorsBtn = document.querySelector('.userScissors');
    rockBtn.addEventListener('click', ()=>{playerChoice = 'ROCK', trackRoundIteration()})
    paperBtn.addEventListener('click', ()=>{playerChoice = 'PAPER', trackRoundIteration()})
    scissorsBtn.addEventListener('click', ()=>{playerChoice = 'SCISSORS', trackRoundIteration()})
}
const hideDefaults = () =>{
    disappearModalAndBtn(preGameInfo);
    disappearModalAndBtn(postGameInfo);
}
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

const playerSelection = () => {
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
const trackRoundIteration = () =>{
    let roundDisplay = document.querySelector('.roundDisplay');
    displayModalAndBtn(game)
    disappearModalAndBtn(playerSelectionHeader)
    roundCount = roundCount+1
    if(roundCount <= 5){
        (roundCount == 0) ? roundDisplay.innerHTML = 'ROUND' : roundDisplay.innerHTML = `ROUND ${roundCount}`;
        playerSelection()
    }else{
        disappearModalAndBtn(scoreBoardDisplay)
        displayModalAndBtn(postGameInfo)
        declareWinner()
    }
}
const playRound = (playerChoice, computerChoice) =>{
    if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
        displaySelection(playerChoice, computerChoice)
        messageDisplay.innerHTML = "You win"
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
    playerScore = playerScore + playerRoundScore;
    computerScore = computerScore + computerRoundScore;
    scoreBoardDisplay.innerHTML = `Player | ${playerScore} - ${computerScore} | Computer`;
}
const displaySelection = (playerSelectonDisplay, computerSelectionDisplay) =>{
    let computerChoiceCaption = document.querySelector('.stageComputerCaption');
    let playerChoiceCaption =  document.querySelector('.stagePlayerCaption');

    playerChoiceCaption.innerHTML = `YOU CHOSE ${playerSelectonDisplay}`;
    computerChoiceCaption.innerHTML = `COMPUTER CHOSE ${computerSelectionDisplay}`;
}
const declareWinner = () =>{
    let postGameHeader = document.querySelector('.postGameHeader');
    disappearModalAndBtn(game)
    postGameMessageDisplay.innerHTML = `TOTAL SCORE <br/> PLAYER | ${playerScore} - ${computerScore} | COMPUTER`;
    disappearModalAndBtn(playAgainBtn)
    messageDisplay.innerHTML =  messageDisplay.innerHTML = `GAME OVER`;

    if(playerScore > computerScore){
        postGameHeader.innerHTML = "PLAYER WINS!!!!!";
    }else if(playerScore < computerScore){
        postGameHeader.innerHTML = "COMPUTER WINS!!!!!";
    }else{
        postGameHeader.innerHTML = "IT'S A TIE!!!!!";
    }

    setTimeout(()=>{
        newGame()
    }, 6000)
}
const resetGame = () =>{
    window.location.reload()
}
const newGame = () =>{
    playAgainBtn.addEventListener('click', ()=>resetGame())
    postGameMessageDisplay.innerHTML = "DO YOU WANT TO TRY AGAIN??";
    displayModalAndBtn(playAgainBtn)
    scoreBoard(0,0)
}
const startGame = () =>{
    getUserSelection();
}
const preGameLoad = () =>{
    let btnAccept = document.querySelector('.accept');
    let btnDecline = document.querySelector('.decline');

    displayModalAndBtn(preGameInfo)
    disappearModalAndBtn(postGameInfo)
    disappearModalAndBtn(playAgainBtn)
    disappearModalAndBtn(game)

    btnAccept.addEventListener('click', ()=>{hideDefaults(), startGame()});
    btnDecline.addEventListener('click', ()=>{
        disappearModalAndBtn(preGameInfo)
        displayModalAndBtn(postGameInfo)
        newGame()
    });
}
preGameLoad();