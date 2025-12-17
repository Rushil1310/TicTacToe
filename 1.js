let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
]

let player = 'X';
let is_win = 0;

function play(i, j) {
    document.getElementById("heading").textContent = `Tic-Tac-Toe`;
    if (is_win) {
        window.alert("The game is over !");
        reset_board();
    } else if (board[i][j] != ' ') {
        window.alert("That position is already occupied !");
    } else {
        board[i][j] = player;
        document.getElementById(3 * i + j).textContent = player;
        if (value(board) != 0) {
            document.getElementById("heading").textContent = `${player} has won !`;
            is_win = 1;
            return;
        }
        player = 'O';
        let final = minimax(board, player);
        if (final[0] == -1 && final[1] == -1) {
            window.alert("Draw !");
            return;
        }
        i = final[0];
        j = final[1];
        board[i][j] = player;
        document.getElementById(3 * i + j).textContent = player;
        if (value(board) != 0) {
            document.getElementById("heading").textContent = `${player} has won !`;
            is_win = 1;
            return;
        }
        player = 'X';
    }
}

function reset_board() {
    document.getElementById("heading").textContent = ` New Game `;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            document.getElementById(3 * i + j).textContent = ' ';
            board[i][j] = ' ';
        }
    }
    is_win = 0;
    player = 'X';
}

function value(arr) {
    if (arr[0][0] != ' ' && arr[0][0] == arr[0][1] && arr[0][0] == arr[0][2]) { return arr[0][0]; }
    if (arr[0][0] != ' ' && arr[2][0] != ' ' && arr[1][0] != ' ' && arr[0][0] == arr[1][0] && arr[0][0] == arr[2][0]) { return arr[0][0]; }
    if (arr[1][2] != ' ' && arr[1][1] != ' ' && arr[1][0] != ' ' && arr[1][0] == arr[1][1] && arr[1][0] == arr[1][2]) { return arr[1][2]; }
    if (arr[0][1] != ' ' && arr[1][1] != ' ' && arr[2][1] != ' ' && arr[0][1] == arr[1][1] && arr[0][1] == arr[2][1]) { return arr[0][1]; }
    if (arr[2][2] != ' ' && arr[2][1] != ' ' && arr[2][0] != ' ' && arr[2][0] == arr[2][1] && arr[2][0] == arr[2][2]) { return arr[2][2]; }
    if (arr[1][2] != ' ' && arr[0][2] != ' ' && arr[2][2] != ' ' && arr[0][2] == arr[1][2] && arr[0][2] == arr[2][2]) { return arr[1][2]; }
    if (arr[0][2] != ' ' && arr[2][0] != ' ' && arr[1][1] != ' ' && arr[0][2] == arr[2][0] && arr[1][1] == arr[2][0]) { return arr[0][2]; }
    if (arr[0][0] != ' ' && arr[1][1] != ' ' && arr[2][2] != ' ' && arr[0][0] == arr[2][2] && arr[1][1] == arr[0][0]) { return arr[0][0]; }
    return 0;
}

function actions(arr) {
    let possible = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (arr[i][j] == ' ') {
                possible.push([i, j]);
            }
        }
    }
    return possible;
}

function result(arr, i1, j1, p) {
    let temp_arr = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' '],
    ]
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            temp_arr[i][j] = arr[i][j];
        }
    }
    temp_arr[i1][j1] = p;
    return temp_arr;
}

function minimax(arr, p) { //returns arr-> 0=i,1=j,2=value (min/max)
    let v = value(arr);
    if (v == 'X') return [-1, -1, 1];
    if (v == 'O') return [-1, -1, -1];
    if (actions(arr).length == 0) return [-1, -1, 0];
    if (p == 'X') {
        let best_pos = [0, 0];
        let val = -1;
        let possible = actions(arr);
        let len = possible.length;
        let next = (p == 'X') ? 'O' : 'X';
        for (let i = 0; i < len; i++) {
            let res = minimax(result(arr, possible[i][0], possible[i][1], p), next);
            if (val < res[2]) {
                val = res[2];
                best_pos[0] = possible[i][0];
                best_pos[1] = possible[i][1];
            }
        }
        let final = [best_pos[0], best_pos[1], val];
        return final;
    } else {
        let best_pos = [0, 0];
        let val = 1;
        let possible = actions(arr);
        let len = possible.length;
        let next = (p == 'X') ? 'O' : 'X';
        for (let i = 0; i < len; i++) {
            let res = minimax(result(arr, possible[i][0], possible[i][1], p), next);
            if (val > res[2]) {
                val = res[2];
                best_pos[0] = possible[i][0];
                best_pos[1] = possible[i][1];
            }
        }
        let final = [best_pos[0], best_pos[1], val];
        return final;
    }
}