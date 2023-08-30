const Event = require('../models/event');

exports.getEvents = async (req, res) => {
    try {

        const events = await Event.find();
        // console.log(events);
        res.json(events);
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};