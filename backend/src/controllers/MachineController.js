module.exports = {
    play(req, res) {
        // return res.json(req.body);
        console.log('chegou no backend');
        return res.send('Funcionou!');
    }
}