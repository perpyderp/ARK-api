const mongoose = require('mongoose');

const armorSchema = new mongoose.Schema({
    'armorType': { type: String, required: true },
    'unlockLevel': { type: String, required: true },
    'armorRating': { type: String, required: true },
    'coldProtection': { type: String, required: true },
    'heatProtection': { type: String, required: true },
    'weight': { type: String, required: true },
    'durability': { type: String, required: true },
    'foundIn': { type: String, required: true },
    'ingredients': { 
        type: [{
            quantity: { type: Number },
            material: { type: String }
        }], 
        required: true },
    'url': { type: String, require: true }
});


module.exports = mongoose.model('Armor', armorSchema);