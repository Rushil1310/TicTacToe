let arr = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
let player = 'X';

function play(i, j) {
    if (arr[i][j] != 0) {
        window.alert("That is already a chosen position !");
    } else {
        document.getElementById(3 * i + j).textContent = player;
        if (player == 'X') {
            arr[i][j] = 1;
            player = 'O'
        } else player = 'X'
        arr[i][j] += 1;
    }
    check();
}

function reset_board() {
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            document.getElementById(3 * i + j).textContent = ' ';
            arr[i][j] = 0;
        }
    }
}

function check() {
    if (arr[0][0] != 0 && arr[0][0] == arr[0][1] && arr[0][0] == arr[0][2]) {
        window.alert(`Player ${player} lost !`);
        reset_board();
    }
    if (arr[0][0] != 0 && arr[0][0] == arr[1][0] && arr[0][0] == arr[2][0]) {
        window.alert(`Player ${player} lost !`);
        reset_board();
    }
    if (arr[1][0] != 0 && arr[1][0] == arr[1][1] && arr[1][0] == arr[1][2]) {
        window.alert(`Player ${player} lost !`);
        reset_board();
    }
    if (arr[0][1] != 0 && arr[0][1] == arr[1][1] && arr[0][1] == arr[2][1]) {
        window.alert(`Player ${player} lost !`);
        reset_board();
    }
    if (arr[2][0] != 0 && arr[2][0] == arr[2][1] && arr[2][0] == arr[2][2]) {
        window.alert(`Player ${player} lost !`);
        reset_board();
    }
    if (arr[0][2] != 0 && arr[0][2] == arr[1][2] && arr[0][2] == arr[2][2]) {
        window.alert(`Player ${player} lost !`);
        reset_board();
    }
    if (arr[0][2] != 0 && arr[2][0] != 0 && arr[1][1] != 0 && arr[0][2] == arr[2][0] && arr[1][1] == arr[2][0]) {
        window.alert(`Player ${player} lost !`);
        reset_board();
    }
    if (arr[0][0] != 0 && arr[1][1] != 0 && arr[2][2] != 0 && arr[0][0] == arr[2][2] && arr[1][1] == arr[0][0]) {
        window.alert(`Player ${player} lost !`);
        reset_board();
    }
}