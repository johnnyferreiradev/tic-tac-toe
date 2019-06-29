const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json()) // Permite o recebimento de dados via JSON

// Conexao com o MongoDB
mongoose.connect('mongodb://localhost:27017/tictactoe', { useNewUrlParser: true })

app.listen(3000, () => {
    console.log('Backend executando na porta 3000...');
})