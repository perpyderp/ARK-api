const express = require('express');
const router = express.Router();
const creatureController = require('../controllers/creatureController');

// Get all creatures
router.get('/creatures', creatureController.getCreatures);
router.get('/creatures/:name', creatureController.getCreatureByName);

module.exports = router;