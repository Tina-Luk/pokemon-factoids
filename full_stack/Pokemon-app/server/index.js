const express = require('express');
const db = require('../database');
const controller = require('../server/controllers/pokemon.js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/pokemon', (req, res) => {
	controller.getAll(req, res);
});

app.post('/pokemon', (req, res) => {
	controller.add(req, res);
});

app.listen(PORT, () => {
	console.log(`Web server running on: http://localhost:${PORT}`);
});
