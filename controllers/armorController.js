const Armor = require('../models/armor');

exports.getAllArmors = async (req, res) => {
    try {
        const armors = await Armor.find();
        res.json(armors);
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getArmorType = async (req, res) => {
    try {
        const armor = await Armor.findOne({ armorType: req.params.armorType });
        if(!armor) {
            return res.status(404).json({ message: req.params.armortype + ' not found'});
        }
        res.json(armor);
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};