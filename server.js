const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/api/data', (req, res) => {
    res.json({ 
        message: 'Hello from Node.js!',
        envProcess: process.env.VERCEL,
        envURL: process.env.VERCEL_URL
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
