const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const productSchema = new Schema({
    productName: String,
    productImage: String,
    creator: String,
    price: Number,
    qty: Number,
})

module.exports = mongoose.model('Product', productSchema);