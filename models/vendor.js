var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VendorSchema = new Schema({

    vendorName: String,
    contactFirstName: String,
    contactLastName: String,
    address: String,
    produce: String,
    veggies: Array,
    fruits: Array,
    meats: Array,
    other: Array
});

module.exports = mongoose.model('Vendor', VendorSchema);