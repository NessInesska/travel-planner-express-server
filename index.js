let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');

let app = express();
let db = require('./db');

const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const API_PREFIX = '/api';

app.get('/', function (req, res) {
    res.send('Hello world')
});

app.get(`${API_PREFIX}/cities`, function (req, res) {
    res.send(db.cities);
});

app.get(`${API_PREFIX}/cities/:id`, function (req, res) {
    let id = parseInt(req.params.id);
    let result = db.cities.filter (c => c.id === id)[0];

    if (!result) {
        res.sendStatus(404)
    } else {
        res.send(result);
    }
});

app.get(`${API_PREFIX}/actions`, function (req, res) {
    res.send(db.actions)
});

app.get(`${API_PREFIX}/flights`, function (req, res) {
    res.send(db.flights)
});

app.listen(PORT, () => console.log('\nJSON Server is running on port ' + PORT));
