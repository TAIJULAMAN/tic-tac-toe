var cells, emptyCells, moves, nextMove, avatar, gameOn, message, winSequence;
var cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8;

init();

function init() {
    moves = 0;
    gameOn = true;
    winSequence = [];
    
    cells = Array.from(document.getElementsByClassName('cell'));
    cell0 = document.getElementById("C0");
    cell1 = document.getElementById("C1");
    cell2 = document.getElementById("C2");
    cell3 = document.getElementById("C3");
    cell4 = document.getElementById("C4");
    cell5 = document.getElementById("C5");
    cell6 = document.getElementById("C6");
    cell7 = document.getElementById("C7");
    cell8 = document.getElementById("C8");
    document.getElementById("msg").textContent = "";
    for (var i = 0; i < cells.length; i++) {
        if (cells[i].hasChildNodes()){
            cells[i].removeChild(cells[i].childNodes[0]);
        }
        cells[i].style.backgroundColor = "";
    }    
    addListeners();     
}

function addListeners() {
    document.getElementById("btnReset").addEventListener("click", reset);
    emptyCells = cells.filter(element => element.innerHTML === "");
    for (var i = 0; i < emptyCells.length; i++) {
        emptyCells[i].addEventListener('click', clickCells);
    }
}
function removeListeners() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', clickCells);
    }
}

function reset() {
    // alert("in reset");
    init();
}


function clickCells() {    
    takeTurn(this.id); 
    if (checkWinner()) {
        var wait = ms => new Promise(resolve => setTimeout(resolve, ms));
        Promise.resolve(500).then(() => wait(500)).then(() => { nextPlayer(); });
    }
    else
        displayWinner();
}

function takeTurn(id) {
    if (moves <= 9) {
        moves += 1;
        var icon = "";
        if (moves % 2 !== 0) {
            icon = `<i class="fa fa-heart" style="font-size:50px;color:red"></i>`;
        }
        else {
            icon = `<i class="fa fa-music" style="font-size:50px;color:goldenrod"></i>`;
        }
        document.getElementById(id).innerHTML = icon;
        removeListeners();
    }
    
}

function nextPlayer() {
    emptyCells = cells.filter(element => element.innerHTML === "");
    if (emptyCells.length > 0) {
        var randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        takeTurn(randomCell.id);
        if (checkWinner())
            addListeners();
        else
            displayWinner();
    }

}

function checkWinner() { 
   

    if (cell0.hasChildNodes() && cell1.hasChildNodes() && cell2.hasChildNodes()) {
      //  console.log(cell0.childNodes[0].className);
        if (cell0.childNodes[0].className === cell1.childNodes[0].className && cell0.childNodes[0].className === cell2.childNodes[0].className) {
            message = cell0.childNodes[0].className === "fa fa-heart" ? "You are the winner!" : "AI is the winner!";
            winSequence = [cell0, cell1, cell2];
            gameOn = false;
        }
    }
    if (cell3.hasChildNodes() && cell4.hasChildNodes() && cell5.hasChildNodes()) {
      //  console.log(cell3.childNodes[0].className);
        if (cell3.childNodes[0].className === cell4.childNodes[0].className && cell3.childNodes[0].className === cell5.childNodes[0].className) {
            message = cell3.childNodes[0].className === "fa fa-heart" ? "You are the winner!" : "AI is the winner!";
            winSequence = [cell3, cell4, cell5];
            gameOn = false;
        }
    }
    if (cell6.hasChildNodes() && cell7.hasChildNodes() && cell8.hasChildNodes()) {
      //  console.log(cell6.childNodes[0].className); 
        if (cell6.childNodes[0].className === cell7.childNodes[0].className && cell6.childNodes[0].className === cell8.childNodes[0].className) {
            message = cell6.childNodes[0].className === "fa fa-heart" ? "You are the winner!" : "AI is the winner!";
            winSequence = [cell6, cell7, cell8];
            gameOn = false;
        }
    }
    if (cell0.hasChildNodes() && cell3.hasChildNodes() && cell6.hasChildNodes()) {
        //console.log(cell0.childNodes[0].className);
        if (cell0.childNodes[0].className === cell3.childNodes[0].className && cell0.childNodes[0].className === cell6.childNodes[0].className) {
            message = cell0.childNodes[0].className === "fa fa-heart" ? "You are the winner!" : "AI is the winner!";
            winSequence = [cell0, cell3, cell6];
            gameOn = false;
        }
    }
    if (cell1.hasChildNodes() && cell4.hasChildNodes() && cell7.hasChildNodes()) {
        //console.log(cell1.childNodes[0].className);
        if (cell1.childNodes[0].className === cell4.childNodes[0].className && cell1.childNodes[0].className === cell7.childNodes[0].className) {
            message = cell1.childNodes[0].className === "fa fa-heart" ? "You are the winner!" : "AI is the winner!";
            winSequence = [cell1, cell4, cell7];
            gameOn = false;
        }
    }
    if (cell2.hasChildNodes() && cell5.hasChildNodes() && cell8.hasChildNodes()) {
       // console.log(cell2.childNodes[0].className);
        if (cell2.childNodes[0].className === cell5.childNodes[0].className && cell2.childNodes[0].className === cell8.childNodes[0].className) {
            message = cell2.childNodes[0].className === "fa fa-heart" ? "You are the winner!" : "AI is the winner!";
            winSequence = [cell2, cell5, cell8];
            gameOn = false;
        }
    }
    if (cell0.hasChildNodes() && cell4.hasChildNodes() && cell8.hasChildNodes()) {
       // console.log(cell0.childNodes[0].className);
        if (cell0.childNodes[0].className === cell4.childNodes[0].className && cell0.childNodes[0].className === cell8.childNodes[0].className) {
            message = cell0.childNodes[0].className === "fa fa-heart" ? "You are the winner!" : "AI is the winner!";
            winSequence = [cell0, cell4, cell8];
            gameOn = false;
        }
    }
    if (cell2.hasChildNodes() && cell4.hasChildNodes() && cell6.hasChildNodes()) {
       // console.log(cell2.childNodes[0].className);
        if (cell2.childNodes[0].className === cell4.childNodes[0].className && cell2.childNodes[0].className === cell6.childNodes[0].className) {
            message = cell2.childNodes[0].className === "fa fa-heart" ? "You are the winner!" : "AI is the winner!";
            winSequence = [cell2, cell4, cell6];
            gameOn = false;
        }
    }
    

        return gameOn;    

}

function displayWinner() {
    document.getElementById("msg").textContent = message;
    for (var i = 0; i < winSequence.length; i++) {
        winSequence[i].style.backgroundColor = "cyan";
    }
}











