const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Get all creatures
router.get('/events', eventController.getEvents);

module.exports = router;