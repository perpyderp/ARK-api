const Status = require('../models/status');

exports.getStatuses = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit); // Get the limit from query parameters

        const statuses = await Status.find().limit(limit || 20);
        // console.log(statuses);
        res.json(statuses);
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};