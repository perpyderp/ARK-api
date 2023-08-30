const mongoose = require('mongoose');

const resourceSchema  = new mongoose.Schema({
    "item": { type: String },
    "rarity": { type: String },
    "properties": {
        type: [{
            "renewable": { type: String },
            "refinable": { type: String },
            "combustible": { type: String },
        }],
        required: true
    }
});


module.exports = mongoose.model('Resource', resourceSchema);