let rndNum, playerSelect,cpuSelect;
function computerPlay(rndNum){
    rndNum = Math.random();
    if (rndNum < .33){
        cpuSelect = `rock`;
    }
    else if (rndNum >= .33 && rndNum <=.66){
        cpuSelect = `paper`;
    }
    else{
        cpuSelect = `scissors`;
    }
    console.log(`Cpu played ${cpuSelect.toUpperCase()}`);
}

function rpsRound(playerSelect,cpuSelect){
    playerSelect = prompt(`Choose RPS`);
    computerPlay(rndNum);
    //p1Res=playerSelect.toLowerCase();
    //console.log(p1Res);
    console.log(playerSelect);
    
    if (playerSelect.localeCompare(cpuSelect, undefined, { sensitivity: 'base' }) == 0){
        alert(`Tie ${playerSelect.toUpperCase()} ties with ${cpuSelect.toUpperCase()}`);
    }
    else if (playerSelect.toLowerCase() == `rock` && cpuSelect == `paper`){
        alert(`You Lose, Paper beats Rock`);
    }
    else if (playerSelect.toLowerCase() == `rock` && cpuSelect == `scissors`){
        alert(`You Win, Rock beats Scissors`);
    }
    else
        alert(`bogos binted`);
}

rpsRound(playerSelect,cpuSelect);

/* 
Random Number Gen, if rndNum < .33 
    display text "Rock"
    if rndNum >= .33 && rndNum <=.66
    display text "Paper"
    else
    display text "Scissors" 

Text comparison Test    

    if (`paper`.localeCompare(`PaAper`, undefined, { sensitivity: 'base' }) == 0){
    alert("photos printed");
}
else{
    alert("bogos binted")
}
*/