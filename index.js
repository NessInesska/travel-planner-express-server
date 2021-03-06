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
    let result = db.cities.filter(c => c.id === id)[0];

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

app.get(`${API_PREFIX}/flights/:id`, function (req, res) {
    let id = parseInt(req.params.id);
    let result = db.flights.filter(f => f.id === id)[0];

    if (!result) {
        res.sendStatus(404)
    } else {
        res.send(result);
    }
});

app.get(`${API_PREFIX}/flights/:cityId`, function (req, res) {
    let cityId = parseInt(req.params.cityId);
    let result = db.flights.filter(f => f.cityId === cityId)[0];

    if (!result) {
        res.sendStatus(404)
    } else {
        res.send(result);
    }
});

app.get(`${API_PREFIX}/hotels`, function (req, res) {
    res.send(db.hotels)
});

app.get(`${API_PREFIX}/hotels/:cityId`, function (req, res) {
    let cityId = parseInt(req.params.cityId);
    let result = db.hotels.filter(h => h.cityId === cityId);

    if (!result) {
        res.sendStatus(404)
    } else {
        res.send(result);
    }
});

app.get(`${API_PREFIX}/hotels/hotel/:id`, function (req, res) {
    let id = parseInt(req.params.id);
    let result = db.hotels.filter(h => h.id === id);

    if (!result) {
        res.sendStatus(404)
    } else {
        res.send(result);
    }
});

app.get(`${API_PREFIX}/adults`, function (req, res) {
    res.send(db.adults)
});

app.get(`${API_PREFIX}/food`, function (req, res) {
    res.send(db.food)
});

app.get(`${API_PREFIX}/food/:id`, function (req, res) {
    let cityId = parseInt(req.params.id);
    let result = db.food.filter(f => f.cityId === cityId);

    if (!result) {
        res.sendStatus(404)
    } else {
        res.send(result);
    }
});

app.get(`${API_PREFIX}/meals`, function (req, res) {
    res.send(db.meals)
});

app.get(`${API_PREFIX}/food/mealType/:mealTypeId`, function (req, res) {
    let mealTypeId = parseInt(req.params.id);
    let result = db.food.filter(f => f.mealTypeId === mealTypeId);

    if (!result) {
        res.sendStatus(404)
    } else {
        res.send(result);
    }
});


app.listen(PORT, () => console.log('\nJSON Server is running on port ' + PORT));
