const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: String,
    productImage: String,
    creator: String,
    price: Number,
    qty: Number,
})

const storeSchema = new Schema({
    storeName: String,
    storeLogo: String,
    productList: [productSchema],
})

module.exports = mongoose.model('Store', storeSchema);
