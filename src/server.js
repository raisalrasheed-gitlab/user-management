const express = require('express');
require('dotenv').config({ path: './src/.env' });

const app = express();

port = process.env.PORT || 5000;
app.listen(port => {
  console.log('+++++++++++++++++++++++++++++++++++++++++++++');
  console.log(`[Server]: Api server is running on port ${process.env.PORT}}.`);
  console.log('+++++++++++++++++++++++++++++++++++++++++++++');
});
