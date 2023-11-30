const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const dotenv = require('dotenv');

const connectDB = require('./config/db');
dotenv.config({path: './config/config.env'});
connectDB();

app.use('/', require('./routes/index'));

app.listen(4000, () => {
  console.log(`Server started on 4000`);
});
