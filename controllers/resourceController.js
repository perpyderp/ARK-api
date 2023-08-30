const Resource = require('../models/resource');

exports.getResources = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit); // Get the limit from query parameters

        const resources = await Resource.find().limit(limit || 20);
        // console.log(resources);
        res.json(resources);
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};