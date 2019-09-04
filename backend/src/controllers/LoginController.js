const mongoose = require('mongoose');
const Ranking = mongoose.model('Ranking');

module.exports = {
    async login(req, res) {
        try {
            const user = await Ranking.find({ name: req.body.name, password: req.body.password });
            
            return res.json({ id: user[0]._id, name: user[0].name, score: user[0].score });
        }catch (e) {
            return res.json({ id: -1 });
        }
    },

    async signup(req, res) {
        try {
            const newPlayer = await Ranking.create(req.body);
            return res.json({id: newPlayer._id, name: newPlayer.name});
        } catch (e) {
            return res.status(500).send(`Error: ${e}`);
        }
    }
}