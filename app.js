const express = require('express');
const bodypaser = require('body-parser');
const config = require('./config');
const test = require('./routes/test');

const app = express();

app.use(bodypaser.json());
app.use(express.json());

app.use('/api', test.routers);

app.listen(config.port, () => console.log(`http://localhost:${config.port}/`));
