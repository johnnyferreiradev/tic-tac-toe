
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
        if(field == ''){
            if(index == 4){
                weightPerField[index] += 2;
            }
    
            if (index == 0 || index == 2 || index == 6 || index == 8) {
                weightPerField[index] += 1;
            }

            // Menos dois pontos caso haja peça do adversário na mesma linha, coluna ou diagonal
            if(squares[index - 3] == 'X' || squares[index - 6] == 'X') {
                weightPerField[index] -= 2;
            }
            if(squares[index + 3] == 'X' || squares[index + 6] == 'X') {
                weightPerField[index] -= 2;
            }
            if(index == 0){
                if(
                    squares[1] == 'X' ||
                    squares[2] == 'X' ||
                    squares[3] == 'X' ||
                    squares[4] == 'X' ||
                    squares[6] == 'X' ||
                    squares[8] == 'X'
                ) {
                    weightPerField[index] -= 2;
                }
            } else if (index == 1) {
                if(
                    squares[0] == 'X' ||
                    squares[2] == 'X' ||
                    squares[4] == 'X' ||
                    squares[7] == 'X'
                ) {
                    weightPerField[index] -= 2;
                }
            } else if (index == 2) {
                if(
                    squares[0] == 'X' ||
                    squares[1] == 'X' ||
                    squares[4] == 'X' ||
                    squares[5] == 'X' ||
                    squares[6] == 'X' ||
                    squares[8] == 'X'
                ) {
                    weightPerField[index] -= 2;
                }
            } else if (index == 3) {
                if(
                    squares[0] == 'X' ||
                    squares[4] == 'X' ||
                    squares[5] == 'X' ||
                    squares[6] == 'X'
                ) {
                    weightPerField[index] -= 2;
                }
            } else if (index == 4) {
                if(
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
            } else if (index == 5) {
                if(
                    squares[2] == 'X' ||
                    squares[3] == 'X' ||
                    squares[4] == 'X' ||
                    squares[8] == 'X'
                ) {
                    weightPerField[index] -= 2;
                }
            } else if (index == 6) {
                if(
                    squares[0] == 'X' ||
                    squares[2] == 'X' ||
                    squares[3] == 'X' ||
                    squares[4] == 'X' ||
                    squares[7] == 'X' ||
                    squares[8] == 'X'
                ) {
                    weightPerField[index] -= 2;
                }
            } else if (index == 7) {
                if(
                    squares[1] == 'X' ||
                    squares[4] == 'X' ||
                    squares[6] == 'X' ||
                    squares[8] == 'X'
                ) {
                    weightPerField[index] -= 2;
                }
            } else if (index == 8) {
                if(
                    squares[0] == 'X' ||
                    squares[2] == 'X' ||
                    squares[4] == 'X' ||
                    squares[6] == 'X' ||
                    squares[7] == 'X'
                ) {
                    weightPerField[index] -= 2;
                }
            }

            
        }
    });

    if (squares[0] === '' && (squares[1] !== 'X' || squares[2] !== 'X')){
        weightPerField[0] -= 2;
    }

    console.log(weightPerField);

    return "Foi!";
}

module.exports = {
    play(req, res) {
        // const nextPlay = randomPlay(req.body.currentBoard);
        const teste = level2(req.body.currentBoard);

        return res.send(teste);
        // return res.json(nextPlay);
    }
}