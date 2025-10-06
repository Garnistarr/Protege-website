// This is a simple script to create a web server.
const express = require('express');
const path = require('path');
const app = express();

// Tell the server to serve the static files from the current directory
app.use(express.static(__dirname));

// Tell the server to send the index.html file for any request
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

// Start the server on the port provided by Cloud Run
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
