const mongoose = require('mongoose');
const Ranking = mongoose.model('Ranking');

module.exports = {
    async calculateScore(req, res) {
        try {
            const { level, amountOfPlays } = req.body;
            const levelWeight = level * 10000;
            const costPerAttempt = (levelWeight / amountOfPlays) / 2;
            const score = levelWeight - costPerAttempt;

            return res.json({ score });
        } catch (err) {
            return res.send(err);
        }
    }
}