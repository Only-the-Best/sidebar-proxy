const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const Bars = require('../database/Bars.js');
const path = require('path');
const normalizePort = require('normalize-port');

const port = normalizePort(process.env.PORT || '8081');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/sidebar/', function(req, res) {
    Bars.getInfo(req.params.page, res);
}) 

app.get('/api/sidebar/:page', function(req, res) {
    Bars.getInfo(req.params.page, res);
}) 

app.get('/:page', function(req, res) {
    res.sendFile(path.join(`${__dirname}/../client/dist/index.html`));
})

// app.post('/api/sidebar', function(req, res) {
//     console.log('post request', req);
// })


app.listen(port, () => {
    console.log(`listening on port ${port}`);
})