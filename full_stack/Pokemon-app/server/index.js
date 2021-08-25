const express = require('express');
const db = require('../database');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
	console.log(`Web server running on: http://localhost:${PORT}`);
});
