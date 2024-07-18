function computerChoice(){
    const choice = Math.random();

    let computerMove = '';
    if( choice >= 0 && choice <= 0.3){
        computerMove = 'ROCK';
    }
    else if (choice >= 0.3 && choice <= 0.6){
        computerMove = 'PAPER';
    }
    else{
        computerMove = 'SCISSORS';
    }
    return computerMove;
}


function rockChoice(){
        const rock = (document.querySelector('.rock-btn').innerHTML);
        const result = computerChoice(); 
        document.querySelector('.statistic').innerHTML = (`You Choosed ${rock} Computer Choosed ${result}`);
        if (result === 'ROCK'){
            document.querySelector('.result').innerHTML = (`It's A Tie.`);
        }
        else if (result === 'SCISSORS'){
            document.querySelector('.result').innerHTML = ('You Win!');
        }
        else{
            document.querySelector('.result').innerHTML = ('You Lose!');
        }
}

function paperChoice(){
    const paper = (document.querySelector('.paper-btn').innerHTML);
    const result = computerChoice(); 
    document.querySelector('.statistic').innerHTML = (`You Choosed ${paper} Computer Choosed ${result}`);
        if (result === 'PAPER'){
            document.querySelector('.result').innerHTML = (`It's A Tie.`);
        }
        else if (result === 'ROCK'){
            document.querySelector('.result').innerHTML = ('You Win!');
        }
        else{
            document.querySelector('.result').innerHTML = ('You Lose!');
        }
        return result;
}   

function scissorsChoice(){
    const scissors = (document.querySelector('.scissors-btn').innerHTML);
    const result = computerChoice(); 
    document.querySelector('.statistic').innerHTML = (`You Choosed ${scissors} Computer Choosed ${result}`);
        if (result === 'SCISSORS'){
            document.querySelector('.result').innerHTML = (`It's A Tie.`);
        }
        else if (result === 'PAPER'){
            document.querySelector('.result').innerHTML = ('You Win!');
        }
        else{
            document.querySelector('.result').innerHTML = ('You Lose!');
        }
        return result;
}








