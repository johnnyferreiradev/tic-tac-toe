const mongoose = require('mongoose');
const Ranking = mongoose.model('Ranking');

module.exports = {
    async calculateScore(req, res) {
        try {
            const { level, amountOfPlays } = req.body;
            const levelWeight = level * 10000;
            const costPerAttempt = (levelWeight / 100) * amountOfPlays;
            console.log(costPerAttempt);
            const score = levelWeight - costPerAttempt;
            const intScore = Math.trunc(score)

            return res.json({ intScore });
        } catch (err) {
            return res.send(err);
        }
    }
}