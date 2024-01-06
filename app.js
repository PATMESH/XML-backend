const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.get('/demo.xml', (req, res) => {
  const filePath = path.join(__dirname, 'demo.xml');

  fs.readFile(filePath, 'utf8', (err, xmlData) => {
    if (err) {
      return res.status(500).send('Error reading XML file');
    }

    res.set('Content-Type', 'application/xml');
    res.send(xmlData);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
