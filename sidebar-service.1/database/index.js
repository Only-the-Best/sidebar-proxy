const mongoose = require("mongoose");
const mongoUri = 'mongodb+srv://admin:mongodb@cluster0-ysygs.mongodb.net/sidebar?retryWrites=true';

mongoose.connect(mongoUri, {useNewUrlParser: true});

const db = mongoose.connection;

console.log("mongoose connected");

module.exports = db;