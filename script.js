let slots = document.getElementsByClassName("slot");
let winMessage = document.getElementById("winner");

let isTurnO = false;
let comb_x = [];
let comb_o = [];

const WINNING_COMBINATIONS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

function move(slot){
    slots[slot].innerHTML = isTurnO ? 'O' : 'X';
    slots[slot].style.color = "black";
    slots[slot].disabled = true;

    isTurnO ? comb_o.push(slot) : comb_x.push(slot);
    isTurnO = !isTurnO;

    checkWin();
}

function stopGame(winner){
    winMessage.innerHTML = `${winner} wins the round!`;
    for (let i = 0; i < slots.length; i++) {
        slots[i].disabled = true;
    }
}

function restart(){
    for (let i = 0; i < slots.length; i++) {
        slots[i].innerHTML = ".";
        slots[i].style.color = "transparent";
        slots[i].disabled = false;
    }
    winMessage.innerHTML = "Fight to the Death.";
    isTurnO = false;
    comb_o = [];
    comb_x = [];
}

function checkWin(){
    let checker = (arr, target) => target.every(v => arr.includes(v));
    for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
        checker(comb_o, WINNING_COMBINATIONS[i]) ? stopGame("O") : "";
        checker(comb_x, WINNING_COMBINATIONS[i]) ? stopGame("X") : "";
    }
}