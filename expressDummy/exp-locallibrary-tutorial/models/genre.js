const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    name:{type:String, min:3, max: 100}
});

GenreSchema.virtual('url').get(()=>{return "/catalog/genre/"+this.id});

module.exports = mongoose.model("Genre", GenreSchema);
