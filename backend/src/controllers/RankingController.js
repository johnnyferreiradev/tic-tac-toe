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
        const newPlayer = await Ranking.create(req.body);

        return res.json(newPlayer);
    },

    async update(req, res) {
        // Code ...
    },

    async destroy(req, res) {
        // Code ...
    }
}