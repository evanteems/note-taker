// Dependencies Start Here !!!
const fs = require('fs');

const express = require('express');

const path = require('path');

//const jay = require('jay');

const genereateUniqueId = require('generate-unique-id');

const jsonNotes = require('./db/db.json');
const {json} = require('body-parser');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//app.use(jay("dev"));

app.get('/', (req, res) => {
    res.sendFiles(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api/notes', (req, res) => {
    res.json(jsonNotes);
});

app.post('/api/notes', function (req, res) {
    let note = {
        title: req.body.title,
        text: req.body.text,
        id: genereateUniqueId({
            length: 9,
            useLetters: false
        })
    };

    console.log(note);
    jsonNotes.push(note);

    fs.writeFile('./db/db.json', JSON.stringify(jsonNotes), (error) => {
        if (error) {
            console.log(error);
        }
        res.send(jsonNotes);
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
    console.log(`The API server can now port on ${PORT}!`);
});