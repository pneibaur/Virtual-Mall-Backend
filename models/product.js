const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const productSchema = new Schema({
    storeName: {type: Schema.Types.ObjectId, ref: 'Store'},
    productName: String,
    creator: String,
    price: Number,
    qty: Number,
})

module.exports = mongoose.model('Product', productSchema);