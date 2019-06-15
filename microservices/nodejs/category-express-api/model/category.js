let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let itemSchema = new Schema({
    "itemId": {type:String, index: {unique:true}},
    "itemName": String,
    "price":Number,
    "currency": String,
    "categories":[String]
});

let CatagoryItem = mongoose.model("Item",itemSchema);