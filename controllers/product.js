// DEPENDENCIES
const express = require('express');
const { findById } = require('../models/product.js');
const router = express.Router()
const Product = require('../models/product.js');

// product Index Route
router.get("/", async (req, res) => {
    try{
        //send all products
        res.json(await Product.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
})

// product Create Route
router.post("/", async (req, res) => {
    try{
        //send all products
        res.json(await Product.create(req.body));
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
})

// product Delete Route
router.delete("/:id", async (req,res)=> {
    try{
        // send all products
        res.json(await Product.findByIdAndRemove(req.params.id));
    } catch (error) {
        // send error
        res.status(400).json(error)
    }
})

// product Update Route
router.put("/:id", async (req, res) => {
    try {
      // send all products
      res.json(
        await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
    } catch (error) {
      // send error
      res.status(400).json(error);
    }
  });





module.exports = router