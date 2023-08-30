const mongoose = require('mongoose');

const statusSchema  = new mongoose.Schema({
    "name": { type: String, required: true },
    "message": { type: String, required: true },
    "HUD_Text": { type: String, required: true },
    "information": { type: String, required: true },
    "note": { type: [String], required: true },
    "img_src": { type: [String], required: true },
});


module.exports = mongoose.model('Status_Effect', statusSchema);