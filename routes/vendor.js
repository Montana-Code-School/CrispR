var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }))

router.use(function(req, res, next) {
   console.log('At least something is happening');
   next();
})

router.route('/vendors')
// POST NEW VENDOR
    .post(function(req, res){
   var newVendor = {
       vendorName: req.body.vendorName,
       contactFirstName: req.body.contactFirstName,
       contactLastName: req.body.contactLastName,
       address: req.body.address,
       product: req.body.product,
       veggies: req.body.veggies,
       fruits: req.body.fruits,
       meats: req.body.meats,
       other: req.body.other,
       img: req.body.img
       
     }

     mongoose.model('Vendor').create(newVendor, function(err, vendor){
             if(err){
           res.send("you have a problem");
             }else{
           
         return res.redirect('/vendor');

         res.send(vendor);
           
         }
       });
     })

// GET All VENDORS
 .get(function(req, res) {
   mongoose.model('Vendor').find({}, function(err, vendor){
     if(err){
       res.send("You got 99 Problems");
     } else {
       console.log("You are getting vendors")
       res.json(vendor);
     }
   });
 })

router.route('/vendors/item/:foodItem')

   .get(function(req, res){
     var f = req.params.foodItem;
     mongoose.model('Vendor').find({}, function(err, vendor){
       if(err){
         res.send(err);
       }
       else{
         var goodVendors = [];
         vendor.map(function(item){
           
           var other = item.other;
           if(other.indexOf(f) > -1) {
             goodVendors.push(item) 
           }
           var meats = item.meats;
           if(meats.indexOf(f) > -1){
             goodVendors.push(item) 
           }
           var fruits = item.fruits;
           if(fruits.indexOf(f) > -1){
             goodVendors.push(item) 
           }
          var veggies = item.veggies;
          if(veggies.indexOf(f) > -1) {
           goodVendors.push(item) 
          }

         })
         res.json(goodVendors);
       }
     })
   })

router.route('/vendors/name/:vendor_id')
// GET VENDOR BY ID
   .get(function(req, res){
       mongoose.model("Vendor").findById(req.params.vendor_id, function(err, vendor){
           if(err){
               res.send("You didn't get all of the vendors");
           } else{
               console.log("You are getting the vendors by ID");
               res.json(vendor);
           }
       })
   })

   .delete(function(req, res) {
       mongoose.model("Vendor").remove({
           _id: req.params.vendor_id
       }, function(err, vendor) {
           if (err)
               res.send(err);
           res.json({ message: 'Deleted' });
       });
   });

module.exports = router;