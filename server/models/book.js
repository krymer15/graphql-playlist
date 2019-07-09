const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    // MongoDB automatically creates IDs
    name: String,
    genre: String,
    authorId: String
});

module.exports = mongoose.model('Book', bookSchema);