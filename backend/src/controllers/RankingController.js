const mongoose = require('mongoose');
const Ranking = mongoose.model('Ranking');

module.exports = {
    async index(req, res) {
        const { page = 1, limit } = req.query;

        const response = await Ranking.paginate({}, {select: 'name score', page, limit: parseInt(limit), sort:{
            score: -1 // Ordem decrescente
        }});

        return res.json(response);
    },

    async show(req, res) {
        try {
            const gamer =  await Ranking.find({ name: req.params.name });
            return res.json({ id: gamer[0]._id, name: gamer[0].name, score: gamer[0].score });
        } catch (e) {
            return res.json({ id: -1 });
        }
    },

    async store(req, res) {
        try {
            const newPlayer = await Ranking.create(req.body);
            return res.json(newPlayer);
        } catch (e) {
            return res.json({ _id: -1 });
        }
    },

    async update(req, res) { // Obs: Melhorar nomes de variáveis... 
        try {
            const response = await Ranking.findOne({ _id: req.params.id });
            const currentScore = response.score;
            const scoreOfThisMove = req.body.score;
            
            let gamer
            if (req.body.score > currentScore){
                gamer = await Ranking.findByIdAndUpdate(req.params.id, req.body, { new: true });
                return res.json({ id: gamer._id, score: gamer.score, scoreOfThisMove });
            } else {
                return res.json({ id: req.params.id, score: currentScore, scoreOfThisMove: req.body.score });
            }
        } catch (e) {
            return res.status(500).send(`Erro no update: ${e}`);
        }
    },
}