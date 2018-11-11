const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/gallery';

const db = mongoose.connect(mongoUri, { useNewUrlParser: true });

module.exports = db;
