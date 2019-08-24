
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

module.exports = {

    play(req, res) {
        const nextPlay = randomPlay(req.body.currentBoard);

        return res.json(nextPlay);
    }
}