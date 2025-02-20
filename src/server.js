const express = require('express');
const cors = require('cors');
const env = require('dotenv');
//config env
env.config({ path: 'src/.env' });
const app = express();
const db = require('../src/config/db');

//middleware
app.use(cors());
app.use(express.json());
const routes = require('./routes/v1/index');
app.use(routes);

port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('+++++++++++++++++++++++++++++++++++++++++++++');
  console.log(`[Server]: Api server is running on port ${port}}.`);
  console.log('+++++++++++++++++++++++++++++++++++++++++++++');
});
