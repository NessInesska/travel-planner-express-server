let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let db = require('./db');

const PORT = 3000;

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => res.send('Hello world'));
app.get('/cities', (req, res) => res.send(db.cities));
app.get('/actions', (req, res) => res.send(db.actions));
app.get('/flights', (req, res) => res.send(db.flights));

app.listen(PORT, () => console.log('\nJSON Server is running on port ' + PORT));
