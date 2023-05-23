const Creature = require('../models/creature');
const mongoose = require('mongoose');

exports.getCreatures = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit); // Get the limit from query parameters

        const creatures = await Creature.find().limit(limit || 5);;
        res.json(creatures);
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCreatureByNameOrId = async (req, res) => {
    try {
        const identifier = req.params.identifier;
        
        let creature;

        if (mongoose.Types.ObjectId.isValid(identifier)) {
          // Find by ID
          creature = await Creature.findById(identifier);
        } else {
          // Find by name
          creature = await Creature.findOne({ name: identifier });
        }

        if(!creature) {
            return res.status(404).json({ message: identifier + ' not found'});
        }
        res.json(creature);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}
