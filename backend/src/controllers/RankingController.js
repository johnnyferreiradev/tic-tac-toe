const mongoose = require('mongoose');
const Ranking = mongoose.model('Ranking');

module.exports = {
    async index(req, res) {
        const gamers = await Ranking.find({});

        return res.json(gamers);
    },

    async show(req, res) {
        try {
            const gamer =  await Ranking.find({ name: req.params.name });
            return res.json({ id: gamer[0]._id, name: gamer[0].name, score: gamer[0].score });
        } catch (e) {
            return res.status(500).send(`Usuário não foi encontrado - Error: ${e}`);
        }
    },

    async store(req, res) {
        try {
            const newPlayer = await Ranking.create(req.body);
            return res.json(newPlayer);
        } catch (e) {
            return res.status(500).send(`Error: ${e}`);
        }
    },

    async update(req, res) {
        try {
            const gamer = await Ranking.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return res.json({ id: gamer._id, name: gamer.name, score: gamer.score });
        } catch (e) {
            return res.status(500).send(`Error: ${e}`);
        }
    }
}