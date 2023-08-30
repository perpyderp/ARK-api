const mongoose = require('mongoose');

const eventSchema  = new mongoose.Schema({
    "img_src": { type: String , required: true },
    "eventName": { type: String , required: true },
    "startDate": { type: String , required: true },
    "endDate": { type: String , required: true },
});


module.exports = mongoose.model('Event', eventSchema);