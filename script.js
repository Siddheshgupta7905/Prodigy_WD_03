const board = document.getElementById('board');
const resetBtn = document.getElementById('resetBtn');
let cells = Array(9).fill(null);
let currentPlayer = 'X';

function checkWinner() {
    const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let combo of winCombos) {
        const [a, b, c] = combo;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            setTimeout(() => {
                alert(`${cells[a]} wins!`);
                resetGame();
            }, 100);
            return;
        }
    }

    if (cells.every(cell => cell)) {
        setTimeout(() => {
            alert("It's a draw!");
            resetGame();
        }, 100);
    }
}

function resetGame() {
    cells.fill(null);
    board.innerHTML = '';
    initBoard();
}

function initBoard() {
    cells.forEach((_, index) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', () => {
            if (!cells[index]) {
                cells[index] = currentPlayer;
                cell.textContent = currentPlayer;
                checkWinner();
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
        board.appendChild(cell);
    });
}

resetBtn.addEventListener('click', resetGame);

// Initialize
initBoard();
