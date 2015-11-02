var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VendorSchema = new Schema({

    vendorName: String,
    contactFirstName: String,
    contactLastName: String,
    address: String,
    product: String,
});

module.exports = mongoose.model('Vendor', VendorSchema);