const mongoose = require('mongoose');

const eggTypeSchema = new mongoose.Schema({
    'eggType': { type: String, required: true },
    'kibble': { type: String, required: true }, 
    'favoredBy': { 
        type: [String], 
        required: true },
    'eggs': { 
        type: [String], 
        required: true },
});

module.exports = mongoose.model('Egg', eggTypeSchema);