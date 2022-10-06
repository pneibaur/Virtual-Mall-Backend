// DEPENDENCIES
const express = require("express");
const { findById } = require("../models/cart.js");
const router = express.Router();
const Cart = require("../models/cart.js");

// Cart Index Route
router.get("/", async (req, res) => {
  try {
    //send all Carts
    res.json(await Cart.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// Cart Create Route
router.post("/", async (req, res) => {
  try {
    //send all Carts
    res.json(await Cart.create(req.body));
  } catch (error) {
    // send error
    res.status(400).json(error);
  }
});

// Cart Delete Route
router.delete("/:id", async (req, res) => {
  try {
    // send all Carts
    res.json(await Cart.findByIdAndRemove(req.params.id));
  } catch (error) {
    // send error
    res.status(400).json(error);
  }
});

// Cart Update Route
router.put("/:id", async (req, res) => {
  try {
    // send all Carts
    res.json(
      await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    // send error
    res.status(400).json(error);
  }
});

module.exports = router;
