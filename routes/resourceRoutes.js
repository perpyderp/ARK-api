const express = require('express');
const router = express.Router();
const resourceController = require('../controllers/resourceController');

// Get all creatures
router.get('/resources', resourceController.getResources);

module.exports = router;