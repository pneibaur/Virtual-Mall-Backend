// DEPENDENCIES
const express = require("express");
const { findById } = require("../models/store.js");
const router = express.Router();
const Store = require("../models/store.js");

// store Index Route
router.get("/", async (req, res) => {
  try {
    //send all products
    res.json(await Store.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// store Create Route
router.post("/", async (req, res) => {
  try {
    //send all stores
    res.json(await Store.create(req.body));
  } catch (error) {
    // send error
    res.status(400).json(error);
  }
});

// store Delete Route
router.delete("/:id", async (req, res) => {
  try {
    // send all products
    res.json(await Store.findByIdAndRemove(req.params.id));
  } catch (error) {
    // send error
    res.status(400).json(error);
  }
});

// store Update Route
router.put("/:id", async (req, res) => {
  try {
    // send all stores
    res.json(
      await Store.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    // send error
    res.status(400).json(error);
  }
});

module.exports = router;
