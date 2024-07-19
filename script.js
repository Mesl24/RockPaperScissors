const score = {
    wins  : 0,
    loses : 0,
    tie   : 0
}


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
    
    document.querySelector('.res')
    .innerHTML = JSON.stringify(`Wins: ${score.wins},   Loses: ${score.loses},   Draw: ${score.tie}`);


}




