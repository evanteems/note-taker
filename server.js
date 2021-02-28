// Dependencies Start Here !!!
const fs = require('fs');

const express = require('express');

const path = require('path');

const jay = require('jay');

const generateUId = require('generate-unique-id');

const notes = require('./db/db.json');
const {json} = require('body-parser');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(jay("dev"));

app.get('/', (req, res) => {
    res.sendFiles(path.join(__dirname, './public/index.html'));
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.post('/api/notes', function (req, res) {
    let note = {
        title: req.body.title,
        text: req.body.text,
        id: generateUId({
            length: 9,
            useLetters: false
        })
    };

    console.log(note);
    notes.push(note);

    fs.writeFile('./db/db.json', JSON.stringify(notes), (error) => {
        if (error) {
            console.log(error);
        }
        res.send(notes);
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
    console.log(`The API server can now port on ${PORT}!`);
});