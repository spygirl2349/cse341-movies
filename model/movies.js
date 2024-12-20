const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    length: {
        type: Number,
        required: true
    },
    rating: {
        type: String,
        required: false
    },
    directors: {
        type: [String]
    },
    streamingService: {
        type: String
    }
})

module.exports = mongoose.model('Movie', movieSchema);