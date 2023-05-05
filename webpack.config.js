const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/app.js', // Replace with your app's entry point
  target: 'node',
  mode: 'production',
  externalsPresets: { node: true }, // Keep Node.js modules external
  externals: [nodeExternals()], // Exclude Node.js modules from bundling
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js' // Output filename
  }
};
