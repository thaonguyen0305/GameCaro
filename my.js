const ROWS = 10;
const CELLS = 10;
let arr = [];
let turn = 1;

function drawGameBoard() {
    let html = '';
    for (let i = 0; i < ROWS; i++) {
        arr[i] = [];
        html += '<tr>';
        for (let j = 0; j < CELLS; j++) {
            arr[i][j] = "*";
            html += '<td id="cell-' + i + '-' + j + '" onclick="play(' + i + ',' + j + ')">';
            html += '</td>';
        }
        html += '</tr>';
    }
    document.getElementById('content').innerHTML = html;
}

function play(x, y) {
    if (turn === 1) {
        arr[x][y] = 'X';
        document.getElementById('cell-' + x + '-' + y).innerHTML = 'X'
        turn = 2;
    } else {
        document.getElementById('cell-' + x + '-' + y).innerHTML = 'O'
        turn = 1;
        arr[x][y] = 'O';
    }
    checkWin(x, y);
}

function checkWin(x, y) {
    //check win ngang
    let count = 1;
    let i = 1;


    //check ngang ve ben trai o dang danh
    while (y - i >= 0 && arr[x][y -i] === arr[x][y]) {
        count++;
        i++;
    }

    //check ngang ve ben phai o dang danh
    let j = 1;
    while (y + j <= CELLS && arr[x][y + j] === arr[x][y]) {
        count++;
        j++;
    }

    if (isGameOver(count)) {
        alert("win")
    }


}

function isGameOver(number) {
    return number === 5;
}


drawGameBoard();