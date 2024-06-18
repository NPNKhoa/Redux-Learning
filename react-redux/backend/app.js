const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const logger = require('morgan');
const connectDb = require('./configs/dbConnection');
const hobbiesRouter = require('./routes/hobbyRoute');

const port = process.env.PORT || 3000;
const apiVersion = process.env.API_VERSION;

connectDb();
const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(logger('dev'));

app.use(`/${apiVersion}/hobbies`, hobbiesRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

