/*
    Author: Jacob Cuison
    Entry point for the ARK API, and sets up the middleware, routes, and error handling

*/

const express = require('express');
const creatureRoutes = require('./routes/creatureRoutes');
const db = require('./db');

require('dotenv').config({ path: '../.env' });

const app = express()
const port = process.env.SERVER_PORT;
app.use('/api', creatureRoutes);
app.use(express.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB connection established');
  // Start server once connected to database
  app.listen(port, () => {
    console.log(`ARK API listening on port ${port}`);
  })
});