let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');

let path = require('path');
let db = require('./db');

let app = express();

const PORT = 3000;
const API_PREFIX = '/api';


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors);

app.use('/', (req, res) => res.send('Hello world'));
app.use(`${API_PREFIX}/cities`, (req, res) => res.send(db.cities));
app.get(`${API_PREFIX}/actions`, (req, res) => res.send(db.actions));
app.get(`${API_PREFIX}/flights`, (req, res) => res.send(db.flights));

app.listen(PORT, () => console.log('\nJSON Server is running on port ' + PORT));
