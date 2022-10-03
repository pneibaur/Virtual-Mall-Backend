// DEPENDENCIES
const express = require('express');
const { findById } = require('../models/product.js');
const router = express.Router()
const Book = require('../models/product.js');

// Book Index Route
router.get("/", async (req, res) => {
    try{
        //send all books
        res.json(await Book.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
})

// Book Create Route
router.post("/", async (req, res) => {
    try{
        //send all books
        res.json(await Book.create(req.body));
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
})

// Book Delete Route
router.delete("/:id", async (req,res)=> {
    try{
        // send all books
        res.json(await Book.findByIdAndRemove(req.params.id));
    } catch (error) {
        // send error
        res.status(400).json(error)
    }
})

// Book Update Route
router.put("/:id", async (req, res) => {
    try {
      // send all books
      res.json(
        await Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
    } catch (error) {
      // send error
      res.status(400).json(error);
    }
  });





module.exports = router