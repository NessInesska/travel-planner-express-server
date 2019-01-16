let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

const PORT = 3000;

let app = express();

app.get('/', function (req, res) {
    res.send('Hello');
});

app.listen(PORT, function() {
    console.log('JSON Server is running on port ' + PORT);
});

