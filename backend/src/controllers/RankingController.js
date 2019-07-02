const mongoose = require('mongoose');
const Ranking = mongoose.model('Ranking');

module.exports = {
    async index(req, res) {
        const gamers = await Ranking.find({});

        return res.json(gamers);
    },

    async show(req, res) {
        // Code ...
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
        // Code ...
    },

    async destroy(req, res) {
        // Code ...
    }
}