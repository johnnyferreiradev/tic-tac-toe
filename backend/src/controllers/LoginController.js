const mongoose = require('mongoose');
const Ranking = mongoose.model('Ranking');

module.exports = {
    async login(req, res) {
        return res.send('Pagina de Login');
    }
}