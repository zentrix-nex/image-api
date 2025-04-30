const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/', (req, res) => {
    const imagesDir = path.join(__dirname, 'images');
    fs.readdir(imagesDir, (err, files) => {
        if (err) return res.status(500).send('Error reading image directory.');
        
        const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
        if (imageFiles.length === 0) return res.status(404).send('No images found.');

        const randomImage = imageFiles[Math.floor(Math.random() * imageFiles.length)];
        res.redirect(`/images/${randomImage}`);
    });
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/random-image`);
});
