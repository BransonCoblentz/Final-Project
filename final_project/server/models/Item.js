const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    stats: {
        type: String,
    },
    position: {
        type: String,
    },
    image: {
        type: String,
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);