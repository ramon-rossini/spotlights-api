const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// CRIAÇÃO DO SERVIDOR
const app = express();

// CONEXÃO DO DB
conectarDB();
app.use(cors());

app.use(express.json());

app.use('/api/conteudos', require('./routes/conteudo'));
app.use('/api/usuarios', require('./routes/usuario'));

app.listen(4000, () => {
    console.log('')
    console.log('° API Online')
})