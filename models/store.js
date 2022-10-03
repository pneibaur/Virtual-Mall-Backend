const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const storeSchema = new Schema({
    storeName: String,
    storeLogo: String,
    productList: [{type: Schema.Types.ObjectId, ref: 'Product'}],
})

module.exports = mongoose.model('Store', storeSchema);
