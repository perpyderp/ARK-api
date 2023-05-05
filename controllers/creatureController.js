const Creature = require('../models/creature');

exports.getCreatures = async (req, res) => {
    try {
        const creatures = await Creature.find();
        res.json(creatures);
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCreatureByName = async (req, res) => {
    try {
        const creature = await Creature.findOne({ name: req.params.name });
        if(!creature) {
            return res.status(404).json({ message: req.params.name + ' not found'});
        }
        res.json(creature);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}