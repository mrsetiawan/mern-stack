const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 6000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

// mongoose.connect(uri, { useNewUrlParser: true });
// mongoose.createConnection(uri, { useNewUrlParser: true });

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongooDB connection estabilished successfully");
})

const exerciseRouter = require('./routes/exercise.js');
const userRouter = require('./routes/user.js');

app.use('/exercise', exerciseRouter);
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`server running in ${port}`);
});