// DEPENDENCIES
const express = require('express');
const { findById } = require('../models/product.js');
const router = express.Router()
const Product = require('../models/product.js');



module.exports = router