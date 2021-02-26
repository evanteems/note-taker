// Dependencies Start Here !!!
const fs = require('fs');

const express = require('express');

const path = require('path');

const jay = require('jay');

const generateUId = require('generate-id');

const notes = require('./db/db.json');
const {json} = require('pbody');

const PORT = process.env.PORT || 3001;
const appz = express();

appz.use(express.static('public'));
appz.use(express.urlencoded({extended: true}));
appz.use(express.json());
appz.use(jay("dev"));

appz.get('/', (req, res) => {
    res.sendFiles(path.join(__dirname, './public/index.html'));
});

