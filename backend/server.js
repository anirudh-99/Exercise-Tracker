const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

require("dotenv").config({path: 'config.env'});

const app = express();
const port = process.env.PORT || 3001;

//middlewares
app.use(morgan());
app.use(cors());
app.use(express.json());

//connecting to the db
mongoose.connect(process.env.DATABASE, {
  useNewUrlParse: true,
  useCreateIndex: true,
})
.then(() => {
    console.log('db connection established');
});

//mounting the routers
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

//starting server
app.listen(port, () => {
  console.log("listening on port " + port);
});
