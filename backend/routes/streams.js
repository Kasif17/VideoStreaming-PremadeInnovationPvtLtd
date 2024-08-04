const express = require('express');
const router = express.Router();
const upload = require('../config/upload');

// Upload video
router.post('/upload', upload.single('video'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.status(200).json({ filePath: req.file.path });
});

// Handle video URL
router.post('/stream-url', (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).send('URL is required.');
  }
  res.status(200).json({ url });
});

module.exports = router;
