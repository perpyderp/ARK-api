const express = require('express');
const router = express.Router();
const eggTypeController = require('../controllers/eggTypeController');

// Get all creatures
router.get('/egg-types', eggTypeController.getEggTypes);
// router.get('/creatures/:name', creatureController.getCreatureByName);

module.exports = router;