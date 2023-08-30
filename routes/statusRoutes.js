const express = require('express');
const router = express.Router();
const statusController  = require('../controllers/statusController');

// Get all creatures
router.get('/statuses', statusController.getStatuses);

module.exports = router;