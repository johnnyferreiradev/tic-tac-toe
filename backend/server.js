const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

app.use(express.json()) // Permite o recebimento de dados via JSON

// Conexao com o MongoDB
mongoose.connect('mongodb://localhost:27017/tictactoe', { useNewUrlParser: true })

// Faz um require de todos os models
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3000, () => {
    console.log('Backend executando na porta 3000...');
})