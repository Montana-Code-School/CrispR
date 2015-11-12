var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VendorSchema = new Schema ({

    vendorName: String,
    contactFirstName: String,
    contactLastName: String,
    address: String,
    veggies: Array,
    fruits: Array,
    meats: Array,
    other: Array,
    img: String
});

module.exports = mongoose.model('Vendor', VendorSchema);