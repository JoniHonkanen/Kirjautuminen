// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

//DB Setup
mongoose.connect('mongodb://localhost:auth/auth'); //luo samalla auth tietokannan

// App Setup
app.use(morgan('combined')); //middleware express, logging framework, nakyy komentokehotteessa
app.use(bodyParser.json({ type: '*/*' })); //middleware express, jasentelee jsoniksi tulevat pyynnot
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('server listening on:', port);