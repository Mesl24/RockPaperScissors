let score = JSON.parse(localStorage.getItem('score')) || 
{
    wins  : 0,
    loses : 0,
    tie   : 0
};


function playGame(playerSelection){


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

}

JSON.parse(localStorage.getItem('score'));

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



