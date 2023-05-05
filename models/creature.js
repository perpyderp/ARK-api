const mongoose = require('mongoose');

const creatureSchema = new mongoose.Schema({
    'name': { type: String, required: true },
    'diet': { type: String, required: false }, 
    'temperament': { type: String, required: false }, 
    'tameable': { type: String, required: false }, 
    'rideable': { type: String, required: false }, 
    'breedable': { type: String, required: false }, 
    'saddleLevelObtained': { type: String, required: false }, 
    'creatureID': { type: String, required: false }, 
    'url': { type: String, required: false }
});

module.exports = mongoose.model('Creature', creatureSchema);