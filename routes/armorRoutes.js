const express = require('express');

const router = express.Router();
const armorController = require('../controllers/armorController');

// Get all creatures
router.get('/armors', armorController.getAllArmors);
router.get('/armors/:armorType', armorController.getArmorType);

module.exports = router;