const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const https = require('https');
const cors = require('cors');
const app = express();
const port = 3001;
const AppController = require('./controller').Controller;

app.use(cors());
app.use(bodyParser.json());

AppController(app);

https.createServer({
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.cert')
}, app).listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
