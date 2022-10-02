// DEPENDENCIES
const express = require('express');
const { findById } = require('../models/product.js');
const router = express.Router()
const Product = require('../models/product.js');

// Index
router.get("/", async (req, res) =>{
    try {
        res.json(await Product.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
})

// New product form route
// Delete product route
// Update new product route
// Create new product route
router.post("/", async (req, res) =>{
    try {
        res.json(await Product.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
})

// Edit product form route
// Show product route
router.get("/:id", async (req, res) =>{
    try {
        res.json(await Product.findById(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})


module.exports = router