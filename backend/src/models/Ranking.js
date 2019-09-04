const mongoose = require('mongoose');
// const mongoosePaginate = require('mongoose-paginate');

const RankingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    score: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    confirmPassword: {
        type: String,
        required: false
    }
});

mongoose.model('Ranking', RankingSchema);