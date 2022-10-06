// -----------------------------------
// DEPENDENCIES
// -----------------------------------
require("dotenv").config();
const { PORT = 4000, DATABASE_URI } = process.env;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");

/////////////////////////////
//DATABASE CONNECTION
////////////////////////////
mongoose.connect(DATABASE_URI);

mongoose.connection
  .on("open", () => console.log("you are connected to mongoose"))
  .on("close", () => console.log("You are disconnected from mongoose"))
  .on("error", (error) => console.log(error));

//connnect to passport
require("./config/passport");
//require routes
const indexRoutes = require("./routes/index");

///////////////////
//MIDDLEWARE
//////////////////
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "SEIRRocks!",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/", indexRoutes);

////////////////////
//ROUTES
///////////////////
//test route
app.get("/", (req, res) => {
  res.send("Mall Landing Page");
});

// Store route
const storeController = require("./controllers/store.js");
app.use("/store", storeController);

// cart route
const cartController = require("./controllers/cart.js");
app.use("/cart", cartController);

// product routes
const productController = require("./controllers/product.js");
app.use("/", productController);

// -----------------------------------
// LISTENER
// ----------------------------------
app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});
