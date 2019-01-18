let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let cors = require('cors');

let app = express();
let db = require('./db');

const PORT = 3000;
// const router = express.Router('src/db.json');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const API_PREFIX = '/api';

app.get('/', function (req, res) {
    res.send('Hello ')
});

// app.use('/api', router);


app.get(`${API_PREFIX}/cities`, function (req, res) {
    res.send(db.cities)
});

app.get(`${API_PREFIX}/actions`, function (req, res) {
    res.send(db.actions)
});

app.get(`${API_PREFIX}/flights`, function (req, res) {
    res.send(db.flights)
});

app.listen(PORT, () => console.log('\nJSON Server is running on port ' + PORT));
