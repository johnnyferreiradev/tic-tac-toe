
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
        // return res.json(req.body);
        const nextPlay = randomPlay(req.body.currentBoard);
        console.log(nextPlay);
        // return res.json(req.body);
    }
}