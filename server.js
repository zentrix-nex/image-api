const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use('/images', express.static(path.join(__dirname, 'images')));

// Handle the root route to avoid "Cannot GET /"
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Random Image API!</h1><p>Visit <a href="/random-image">/random-image</a> to see a random image.</p>');
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/random-image`);
});
