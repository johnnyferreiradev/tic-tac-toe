const mongoose = require('mongoose');
const Ranking = mongoose.model('Ranking');

module.exports = {
    async calculateScore(req, res) { // Função incompleta, por arrumar... 
        return 
    },

    async calculateScore1 (req, res) {
        try {
            const   win = req.body.win,
                    plays = req.body.plays,
                    time = req.body.time,
                    reset = req.body.reset,
                    giveUp = req.body.giveUp,
                    level = req.body.level,
                    accumScore = req.body.accumScore;

            const WIN_VALUE = 1000000;
            const PLAY_VALUE = 10;
            const RESET_VALUE = 200;
            const GIVEUP_VALUE = 500;
            
            if (win != 0 && win != 1) throw "Codigo de Erro 1";
            if (plays <= 2) throw "Codigo de Erro 2";
            if (time === 0) throw "Codigo de Erro 3";
            if (reset < 0) throw "Codigo de Erro 4";
            if (giveUp !== 0 && giveUp !== 1) throw "Codigo de Erro 5";
            if (level !== 1 && level !== 2 && level !== 3) throw "Codigo de Erro 6";

            // / ((plays * PLAY_VALUE) * time)) - (reset * RESET_VALUE) - (giveUp * GIVEUP_VALUE);
            //const score = ((win * WIN_VALUE * level) / (plays * PLAY_VALUE)) / time;
            //console.log(score);
            //let scoreNivel = score * (level / 10);

            //scoreNivel = scoreNivel < 0 ? 0 : scoreNivel; 

            //let accumulatedScore = accumScore + scoreNivel;
            
            //return res.json({ score: scoreNivel, scoreTotal: accumulatedScore });
        } catch (e) {
            return res.send(`Ops! Algo deu errado! Error: ${e}`);
        }
    }
}