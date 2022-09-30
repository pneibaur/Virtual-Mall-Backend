// -----------------------------------
// DEPENDENCIES
// -----------------------------------
require("dotenv").config();
const { PORT = 4000, MONGODB_URL } = process.env;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

/////////////////////////////
//DATABASE CONNECTION
///////////////////////////
mongoose.connect(MONGODB_URL);

mongoose.connection
  .on("open", () => console.log("you are connected to mongoose"))
  .on("close", () => console.log("You are disconnected from mongoose"))
  .on("error", (error) => console.log(error));

////////////////////////
//MODELS
///////////////////////

//userSchema

//cartSchema

//productSchema

//storeSchema

///////////////////
//MIDDLEWARE
//////////////////
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

////////////////////
//ROUTES
///////////////////
//test route
app.get("/", (req, res) => {
  res.send("Hello Virtual Mall!");
});

const artController = require('./controllers/art.js');
app.use('/art', artController);

const movieController = require('./controllers/movie.js');
app.use('/movie', movieController);

const bookController = require('./controllers/book.js');
app.use('/book', bookController);

const sportController = require('./controllers/sport.js');
app.use('/sport', sportController);

// -----------------------------------
// LISTENER
// ----------------------------------
app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});
