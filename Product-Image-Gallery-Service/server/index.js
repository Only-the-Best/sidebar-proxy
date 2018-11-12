const express = require('express');
const path = require('path');
var cors = require('cors');
const db = require('../database/index.js');
const Gallery = require('../database/Gallery.js');

const app = express();
const port = 8081;

app.use(cors());
app.use(express.static(__dirname + '/../dist/'));

app.get('/:id', (req, res) => {
	console.log('initializing page request...');
	res.sendFile(path.join(`${__dirname}/../dist/index.html`));
});

app.get('/homes/:id', (req, res) => {
	req.params.id = Number(req.params.id);
	Gallery.find({id: req.params.id}, (err, data) => {
		if (err) {
			console.log("Error*: ", err);
		} else {
			res.status(200).send(data);
		}
	})
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});



