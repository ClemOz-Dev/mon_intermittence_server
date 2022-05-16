// librairies
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
var stamp = require('./routes/stamp_router');

// vars
const app = express();

const port = 3001;
const jwtSecret = 'OurSuperLongRandomSecretToSignOurJWTgre5ezg4jyt5j4ui64gn56bd4sfs5qe4erg5t5yjh46yu6knsw4q';

/* Middlewares */
// parse request body
app.use(bodyParser.json());
app.use(cors());

// cors
// const allowedOrigins = ['http://localhost:8080', 'http://localhost:33607'];

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  // response.header('Access-Control-Allow-Credentials', true);
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// prepare authorization middleware
const authorizationMiddleware = jwt({ secret: jwtSecret, algorithms: ['HS256'] });

/* ========================================== ROUTERS ============================================ */

// server's landing page: GET /
app.get('/', (req, res) => {
  console.log('>> GET /');
  res.sendFile( __dirname + '/index.html');
});

app.use('/api/stamp', stamp);

// Error middleware
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    console.log('<< 401 UNAUTHORIZED - Invalid Token');
    res.status(401).send('Invalid token');
  }
});

/*
 * Server
 */
app.listen(port, () => {
  console.log(`listening on *:${port}`);
});
