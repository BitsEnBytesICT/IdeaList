const express = require('express')
const db = require('./db')
const app = express()
const port = 8000
const bodyParser = require("body-parser");
const { objectToString } = require('@vue/shared');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// STAP3
// Maak de methodes om de ideeën in een tabel toe te voegen en weer op te halen
// 1 methode voor het ophalen van de ideeën (dmv een SQL select statement)
// 1 methode voor het toevoegen van een idee (dmv een SQL insert statement)

app.listen(port, () => console.log(`Listening on port ${port}`));