function gameBoard () {
    board = [
        [0, 0, 0]
        [0, 0, 0]
        [0, 0, 0]
    ]
}

function Player (name, symbol) {
    this.name = name; 
    this.symbol = symbol;
}

const p1 = new Player('p1', 1);
const p2 = new Player('p2', 2);

function gameLogic (playerOne, playerTwo) {

    const players = [p1, p2];

    let activePlayer = players[0];
    
    const switchTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    }; 

    const getActivePlayer = () => activePlayer;

    const playRound = (x, y, board) {
        if (board[x][y] == 0){
            board[x][y] = getActivePlayer().symbol;
        }
        switchTurn();
        return board; // here I need to throw an error or somehting in the else statement
    }

    const printNewRound () => {
        console.log(board);
        console.log(`it is ${activePlayer.name} turn`)
    }


}
