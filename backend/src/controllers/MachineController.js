
const randomPlay = (squares) => {
    const freeSquares = squares.map((square, index) => {
        if (square === '') {
            return index;
        } 
    });
    
    const whitoutUndefined = freeSquares.filter(value => value !== undefined);
    
    const nextPlay = Math.floor(Math.random() * whitoutUndefined.length);
    
    return nextPlay;
}

module.exports = {

    play(req, res) {
        // return res.json(req.body);
        randomPlay(req.body.currentBoard);
        // return res.json(req.body);
    }
}