const express = require('express');

const creatureRoutes = require('../src/routes/creatureRoutes');
const db = require('../src/db');

require('dotenv');

const app = express()
const port = process.env.SERVER_PORT;
app.use('/api', creatureRoutes);
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the ARK API');
});

console.log("Connecting to database...");
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB connection established');
  // Start server once connected to database
  app.listen(port, () => {
    console.log(`ARK API listening on port ${port}`);
  })
});

// Export the Express app as a serverless function
module.exports.handler = async (event, context) => {
    return await app(event, context);
};