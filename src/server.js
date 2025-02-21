const express = require('express');
const cors = require('cors');
const env = require('dotenv');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
//config env
env.config({ path: 'src/.env' });
const app = express();
const db = require('../src/config/db');

//middleware
app.use(cors());
app.use(express.json());

const routes = require('./routes/v1/index');

app.use(routes);

// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'User Management API',
      version: '1.0.0',
      description: 'API for managing users',
    },
    servers: [
      {
        url: 'http://localhost:5000/',
      },
    ],
  },
  apis: ['src/routes/v1/*.js'],
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('*', (req, res) => {
  res.status(404).json({ message: 'Page not found' });
});

port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('+++++++++++++++++++++++++++++++++++++++++++++');
  console.log(`[Server]: Api server is running on port ${port}}.`);
  console.log('+++++++++++++++++++++++++++++++++++++++++++++');
});
