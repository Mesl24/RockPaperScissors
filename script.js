//Defining Score and giving it a default value
let score = JSON.parse(localStorage.getItem('score')) || 
{
    wins  : 0,
    loses : 0,
    tie   : 0
};

// EventLisner part for the entire webpage 
let isAutoPlay = false;
let intervalId;
const button = document.querySelector('.autoPlay-btn');
button.addEventListener('click', () => {
    if(!isAutoPlay){
        const computerChoice = getComputerChoice()
        intervalId = setInterval(() => {
            playGame(computerChoice)
        }, 1000)
        isAutoPlay = true;
        document.querySelector('.autoPlay-btn').innerHTML = "Playing...";
    }else{
        isAutoPlay = false;
        clearInterval(intervalId);
        document.querySelector('.autoPlay-btn').innerHTML = "Auto Play";
    }
})

const playRock = document.querySelector('.game-btn1');
playRock.addEventListener('click', () =>{
    playGame('Rock');
})

const playPaper = document.querySelector('.game-btn2');
playPaper.addEventListener('click', () =>{
    playGame('Paper');
})

const playScissors = document.querySelector('.game-btn3');
playScissors.addEventListener('click', () =>{
    playGame('Scissors');
})

const resetWins = document.querySelector('.reset-btn-choice1');
resetWins.addEventListener('click', () => {
    pickResetValue('wins');
})

const resetLoses = document.querySelector('.reset-btn-choice2');
resetLoses.addEventListener('click', () => {
    pickResetValue('loses');
})

const resetTie = document.querySelector('.reset-btn-choice3');
resetTie.addEventListener('click', () => {
    pickResetValue('ties');
})

const resetBtn = document.querySelector('.reset-btn');
    resetBtn.addEventListener('click', () => {
        resetScore();
    })


const body = document.body;
body.addEventListener('keydown', (event) => {
    if(event.key === 'r'){
        playGame('Rock');
    }
    else if(event.key === 'p'){
        playGame('Paper');
    }
    else if(event.key === 's'){
        playGame('Scissors');
    }
    else if(event.key === 'a'){
        if(!isAutoPlay){
            const computerChoice = getComputerChoice()
            intervalId = setInterval(() => {
                playGame(computerChoice)
            }, 1000)
            isAutoPlay = true;
            document.querySelector('.autoPlay-btn').innerHTML = "Playing...";
        }else{
            isAutoPlay = false;
            clearInterval(intervalId);
            document.querySelector('.autoPlay-btn').innerHTML = "Auto Play";
        }
    }
})

// The main function to play the game
function playGame(playerSelection){

    const computerChoice = getComputerChoice()
    if(playerSelection === 'Rock'){
        if(computerChoice === 'Rock'){
            document.querySelector('.statistic')
                    .innerHTML = (`You Choosed ${playerSelection} Computer Choosed ${computerChoice}`);
            document.querySelector('.result')
                    .innerHTML = (`it's a TIE.`);
        }
        else if(computerChoice === 'Paper'){
            document.querySelector('.statistic')
                    .innerHTML = (`You Choosed ${playerSelection} Computer Choosed ${computerChoice}`);
            document.querySelector('.result')
                    .innerHTML = (`You LOSE!`);
        }
        else{
            document.querySelector('.statistic')
                    .innerHTML = (`You Choosed ${playerSelection} Computer Choosed ${computerChoice}`);
            document.querySelector('.result')
                    .innerHTML = (`You WIN!`);
        }
    }

    if(playerSelection === 'Paper'){
        if(computerChoice === 'Paper'){
            document.querySelector('.statistic')
                    .innerHTML = (`You Choosed ${playerSelection} Computer Choosed ${computerChoice}`);
            document.querySelector('.result')
                    .innerHTML = (`it's a TIE.`);
        }
        else if(computerChoice === 'Scissors'){
            document.querySelector('.statistic')
                    .innerHTML = (`You Choosed ${playerSelection} Computer Choosed ${computerChoice}`);
            document.querySelector('.result')
                    .innerHTML = (`You LOSE!`);
        }
        else{
            document.querySelector('.statistic')
                    .innerHTML = (`You Choosed ${playerSelection} Computer Choosed ${computerChoice}`);
            document.querySelector('.result')
                    .innerHTML = (`You WIN!`);
        }
    }

    if(playerSelection === 'Scissors'){
        if(computerChoice === 'Scissors'){
            document.querySelector('.statistic')
                    .innerHTML = (`You Choosed ${playerSelection} Computer Choosed ${computerChoice}`);
            document.querySelector('.result')
                    .innerHTML = (`it's a TIE.`);
        }
        else if(computerChoice === 'Rock'){
            document.querySelector('.statistic')
                    .innerHTML = (`You Choosed ${playerSelection} Computer Choosed ${computerChoice}`);
            document.querySelector('.result')
                    .innerHTML = (`You LOSE!`);
        }
        else{
            document.querySelector('.statistic')
                    .innerHTML = (`You Choosed ${playerSelection} Computer Choosed ${computerChoice}`);
            document.querySelector('.result')
                    .innerHTML = (`You WIN!`);
        }
    }

    const scoreElement = document.querySelector('.result').innerText;


    if (scoreElement === 'You WIN!'){
        score.wins += 1;
    }
    else if(scoreElement === 'You LOSE!'){  
        score.loses += 1;
    }
    else{
        score.tie +=1;
    }
    
    localStorage.setItem('score', JSON.stringify(score));
    
    document.querySelector('.res-wins')
    .innerHTML = (`Wins: ${score.wins}`)
    document.querySelector('.res-lose')
    .innerHTML = (`Losses: ${score.loses}`)
    document.querySelector('.res-draw')
    .innerHTML = (`Draw: ${score.tie}`);
    

}

// Getting the computer Choice and returning it
function getComputerChoice(){
    const choice = Math.random();
    let computerChoice = '';

    if(choice >= 0 && choice <= 0.3){
        computerChoice = 'Rock';
    }
    else if (choice > 0.3 && choice <= 0.6){
        computerChoice = 'Scissors';
    }
    else{
        computerChoice = 'Paper';
    }

    return computerChoice;
}

// Reseting the entire score with a single click
function resetScore(){

    JSON.stringify(localStorage.removeItem('score'));   
    score = {
        wins: 0,
        loses: 0,
        tie: 0
    };


    document.querySelector('.res-wins')
    .innerHTML = (`Wins: ${score.wins}`)
    document.querySelector('.res-lose')
    .innerHTML = (`Losses: ${score.loses}`)
    document.querySelector('.res-draw')
    .innerHTML = (`Draw: ${score.tie}`);

    document.querySelector('.statistic')
    .innerHTML = (``);
    document.querySelector('.result')
            .innerHTML = (``);

}

JSON.parse(localStorage.getItem('score'));

// Choosing which score to reset depending on the user preference
function pickResetValue(choice){
    if(choice === 'wins'){
        score = {
            wins: 0,
            loses: score.loses,
            tie: score.tie
        }
        document.querySelector('.res-wins')
        .innerHTML = (`Wins: ${score.wins}`)
        document.querySelector('.res-lose')
        .innerHTML = (`Losses: ${score.loses}`)
        document.querySelector('.res-draw')
        .innerHTML = (`Draw: ${score.tie}`);
        }
    else if(choice === 'loses'){
        score = {
            wins: score.wins,
            loses: 0,
            tie: score.tie
        }
        document.querySelector('.res-wins')
        .innerHTML = (`Wins: ${score.wins}`)
        document.querySelector('.res-lose')
        .innerHTML = (`Losses: ${score.loses}`)
        document.querySelector('.res-draw')
        .innerHTML = (`Draw: ${score.tie}`);
    }
    else if(choice === 'tie'){
        score = {
            wins: score.wins,
            loses: score.loses,
            tie: 0
        }
        document.querySelector('.res-wins')
        .innerHTML = (`Wins: ${score.wins}`)
        document.querySelector('.res-lose')
        .innerHTML = (`Losses: ${score.loses}`)
        document.querySelector('.res-draw')
        .innerHTML = (`Draw: ${score.tie}`);
    }
    localStorage.setItem('score', JSON.stringify(score));
    
}



