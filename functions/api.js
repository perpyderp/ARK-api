'use strict';
const express = require('express');
const router = express.Router();
const serverless = require('serverless-http');

const creatureRoutes = require('../src/routes/creatureRoutes');
// const db = require('../src/db');

require('dotenv');

const app = express()
const port = process.env.SERVER_PORT;
app.use('/api', creatureRoutes);
app.use(express.json());

router.get('/', (req, res) => {
  res.send('Welcome to the ARK API');
});

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('MongoDB connection established');
//   // Start server once connected to database
//   app.listen(port, () => {
//     console.log(`ARK API listening on port ${port}`);
//   })
// });

app.use('/.netlify/functions/api', router);

// Export the Express app as a serverless function
module.exports.handler = serverless(app);