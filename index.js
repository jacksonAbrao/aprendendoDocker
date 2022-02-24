const express = require('express');

const PORT = 5000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World 1');
});

app.listen(PORT, HOST);