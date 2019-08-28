
function highestValueIndexFunc(array, squares) {
    let highestValueIndex = 0;
    let highestValue = -10000;
    for (let i = 0; i < 9; i++) {
        if (array[i] >= highestValue) {
            highestValue = array[i];
            highestValueIndex = i;
        }
    }
    return highestValueIndex;
}

// Level 1 da IA: Realiza a jogada em uma posição aleatória do tabuleiro
const randomPlay = (squares) => {
    const freeSquares = squares.map((square, index) => {
        if (square === '') {
            return index;
        }
    });
    const whitoutUndefined = freeSquares.filter(value => value !== undefined);
    const indexNextPlay = Math.floor(Math.random() * whitoutUndefined.length);
    return whitoutUndefined[indexNextPlay];
}

const level2 = (squares) => {
    const weightPerField = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    squares.forEach((field, index) => {
        if (field == '') {
            // Mais dois pontos caso o campo vazio seja o central
            if (index == 4) {
                weightPerField[index] += 2;
            }
            // Mais um ponto caso o campo vazio seja um dos cantos
            if (index == 0 || index == 2 || index == 6 || index == 8) {
                weightPerField[index] += 1;
            }

            if (index == 0) {
                // Menos dois pontos caso haja peça do adversário na mesma linha, coluna ou diagonal
                if (
                    squares[1] == 'X' ||
                    squares[2] == 'X' ||
                    squares[3] == 'X' ||
                    squares[4] == 'X' ||
                    squares[6] == 'X' ||
                    squares[8] == 'X'
                ) {
                    weightPerField[index] -= 2;
                }
                // Mais quatro pontos se o campo impedir a vitória do adversário
                if (
                    squares[1] == 'X' && squares[2] == 'X' ||
                    squares[3] == 'X' && squares[6] == 'X' ||
                    squares[4] == 'X' && squares[8] == 'X'
                ) {
                    weightPerField[index] += 4;
                }
                // Mais quatro pontos caso o campo leve a uma vitória
                if (
                    squares[1] == 'O' && squares[2] == 'O' ||
                    squares[3] == 'O' && squares[6] == 'O' ||
                    squares[4] == 'O' && squares[8] == 'O'
                ) {
                    weightPerField[index] += 4;
                }
            } else if (index == 1) {
                // Menos dois pontos caso haja peça do adversário na mesma linha, coluna ou diagonal
                if (
                    squares[0] == 'X' ||
                    squares[2] == 'X' ||
                    squares[4] == 'X' ||
                    squares[7] == 'X'
                ) {
                    weightPerField[index] -= 2;
                }
                // Mais quatro pontos se o campo impedir a vitória do adversário
                if (
                    squares[0] == 'X' && squares[2] == 'X' ||
                    squares[4] == 'X' && squares[7] == 'X'
                ) {
                    weightPerField[index] += 4;
                }
                // Mais quatro pontos caso o campo leve a uma vitória
                if (
                    squares[0] == 'O' && squares[2] == 'O' ||
                    squares[4] == 'O' && squares[7] == 'O'
                ) {
                    weightPerField[index] += 4;
                }
            } else if (index == 2) {
                // Menos dois pontos caso haja peça do adversário na mesma linha, coluna ou diagonal
                if (
                    squares[0] == 'X' ||
                    squares[1] == 'X' ||
                    squares[4] == 'X' ||
                    squares[5] == 'X' ||
                    squares[6] == 'X' ||
                    squares[8] == 'X'
                ) {
                    weightPerField[index] -= 2;
                }
                // Mais quatro pontos se o campo impedir a vitória do adversário
                if (
                    squares[0] == 'X' && squares[1] == 'X' ||
                    squares[4] == 'X' && squares[6] == 'X' ||
                    squares[5] == 'X' && squares[8] == 'X'
                ) {
                    weightPerField[index] += 4;
                }
                // Mais quatro pontos caso o campo leve a uma vitória
                if (
                    squares[0] == 'O' && squares[1] == 'O' ||
                    squares[4] == 'O' && squares[6] == 'O' ||
                    squares[5] == 'O' && squares[8] == 'O'
                ) {
                    weightPerField[index] += 4;
                }
            } else if (index == 3) {
                // Menos dois pontos caso haja peça do adversário na mesma linha, coluna ou diagonal
                if (
                    squares[0] == 'X' ||
                    squares[4] == 'X' ||
                    squares[5] == 'X' ||
                    squares[6] == 'X'
                ) {
                    weightPerField[index] -= 2;
                }
                // Mais quatro pontos se o campo impedir a vitória do adversário
                if (
                    squares[0] == 'X' && squares[6] == 'X' ||
                    squares[4] == 'X' && squares[5] == 'X'
                ) {
                    weightPerField[index] += 4;
                }
                // Mais quatro pontos caso o campo leve a uma vitória
                if (
                    squares[0] == 'O' && squares[6] == 'O' ||
                    squares[4] == 'O' && squares[5] == 'O'
                ) {
                    weightPerField[index] += 4;
                }
            } else if (index == 4) {
                // Menos dois pontos caso haja peça do adversário na mesma linha, coluna ou diagonal
                if (
                    squares[0] == 'X' ||
                    squares[1] == 'X' ||
                    squares[2] == 'X' ||
                    squares[3] == 'X' ||
                    squares[5] == 'X' ||
                    squares[6] == 'X' ||
                    squares[7] == 'X' ||
                    squares[8] == 'X'
                ) {
                    weightPerField[index] -= 2;
                }
                // Mais quatro pontos se o campo impedir a vitória do adversário
                if (
                    squares[0] == 'X' && squares[8] == 'X' ||
                    squares[2] == 'X' && squares[6] == 'X' ||
                    squares[1] == 'X' && squares[7] == 'X' ||
                    squares[3] == 'X' && squares[5] == 'X'
                ) {
                    weightPerField[index] += 4;
                }
                // Mais quatro pontos caso o campo leve a uma vitória
                if (
                    squares[0] == 'O' && squares[8] == 'O' ||
                    squares[2] == 'O' && squares[6] == 'O' ||
                    squares[1] == 'O' && squares[7] == 'O' ||
                    squares[3] == 'O' && squares[5] == 'O'
                ) {
                    weightPerField[index] += 4;
                }
            } else if (index == 5) {
                // Menos dois pontos caso haja peça do adversário na mesma linha, coluna ou diagonal
                if (
                    squares[2] == 'X' ||
                    squares[3] == 'X' ||
                    squares[4] == 'X' ||
                    squares[8] == 'X'
                ) {
                    weightPerField[index] -= 2;
                }
                // Mais quatro pontos se o campo impedir a vitória do adversário
                if (
                    squares[2] == 'X' && squares[8] == 'X' ||
                    squares[3] == 'X' && squares[4] == 'X'
                ) {
                    weightPerField[index] += 4;
                }
                // Mais quatro pontos caso o campo leve a uma vitória
                if (
                    squares[2] == 'O' && squares[8] == 'O' ||
                    squares[3] == 'O' && squares[4] == 'O'
                ) {
                    weightPerField[index] += 4;
                }
            } else if (index == 6) {
                // Menos dois pontos caso haja peça do adversário na mesma linha, coluna ou diagonal
                if (
                    squares[0] == 'X' ||
                    squares[2] == 'X' ||
                    squares[3] == 'X' ||
                    squares[4] == 'X' ||
                    squares[7] == 'X' ||
                    squares[8] == 'X'
                ) {
                    weightPerField[index] -= 2;
                }
                // Mais quatro pontos se o campo impedir a vitória do adversário
                if (
                    squares[0] == 'X' && squares[3] == 'X' ||
                    squares[2] == 'X' && squares[4] == 'X' ||
                    squares[7] == 'X' && squares[8] == 'X'
                ) {
                    weightPerField[index] += 4;
                }
                // Mais quatro pontos caso o campo leve a uma vitória
                if (
                    squares[0] == 'O' && squares[3] == 'O' ||
                    squares[2] == 'O' && squares[4] == 'O' ||
                    squares[7] == 'O' && squares[8] == 'O'
                ) {
                    weightPerField[index] += 4;
                }
            } else if (index == 7) {
                // Menos dois pontos caso haja peça do adversário na mesma linha, coluna ou diagonal
                if (
                    squares[1] == 'X' ||
                    squares[4] == 'X' ||
                    squares[6] == 'X' ||
                    squares[8] == 'X'
                ) {
                    weightPerField[index] -= 2;
                }
                // Mais quatro pontos se o campo impedir a vitória do adversário
                if (
                    squares[1] == 'X' && squares[4] == 'X' ||
                    squares[6] == 'X' && squares[8] == 'X'
                ) {
                    weightPerField[index] += 4;
                }
                // Mais quatro pontos caso o campo leve a uma vitória
                if (
                    squares[1] == 'O' && squares[4] == 'O' ||
                    squares[6] == 'O' && squares[8] == 'O'
                ) {
                    weightPerField[index] += 4;
                }
            } else if (index == 8) {
                // Menos dois pontos caso haja peça do adversário na mesma linha, coluna ou diagonal
                if (
                    squares[0] == 'X' ||
                    squares[2] == 'X' ||
                    squares[4] == 'X' ||
                    squares[6] == 'X' ||
                    squares[7] == 'X'
                ) {
                    weightPerField[index] -= 2;
                }
                // Mais quatro pontos se o campo impedir a vitória do adversário
                if (
                    squares[0] == 'X' && squares[4] == 'X' ||
                    squares[2] == 'X' && squares[5] == 'X' ||
                    squares[6] == 'X' && squares[7] == 'X'
                ) {
                    weightPerField[index] += 4;
                }
                // Mais quatro pontos caso o campo leve a uma vitória
                if (
                    squares[0] == 'O' && squares[4] == 'O' ||
                    squares[2] == 'O' && squares[5] == 'O' ||
                    squares[6] == 'O' && squares[7] == 'O'
                ) {
                    weightPerField[index] += 4;
                }
            }
        } else {
            weightPerField[index] = -1000;
        }
    });
    return highestValueIndexFunc(weightPerField, squares);
}

module.exports = {
    play(req, res) {
        const nextPlay = level2(req.body.currentBoard);
        return res.json(nextPlay);
    }
}